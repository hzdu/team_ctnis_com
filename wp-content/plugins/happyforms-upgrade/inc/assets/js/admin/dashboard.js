( function( $, settings ) {

	var onDialogButton = happyForms.dashboard.onDialogButton;

	happyForms.dashboard.onDialogButton = function( e ) {
		e.preventDefault();
		e.stopImmediatePropagation();

		var formId = $( '#happyforms-dialog-select' ).val();

		if ( ! formId ) {
			return false;
		}

		if ( 1 == settings.forms[formId].modal ) {
			var link = settings.modalLink.replace( 'ID', formId );

			window.parent.send_to_editor( link );
			$( '#happyforms-modal' ).dialog( 'close' );
			$( '#happyforms-dialog-select' ).val( '' );

			if ( editor = this.getCurrentEditor() ) {
				editor.trigger( 'focus' );
			}

			return;
		}

		return onDialogButton.apply( this, arguments );
	}

	happyForms.dashboard.removeNotices = function() {
		$( '.happyforms-notice' ).remove();
	}

	happyForms.dashboard.addNotice = function( status, message, dismissible ) {
		this.removeNotices();

		var classes = 'notice happyforms-notice notice-' + status;

		if ( dismissible ) {
			classes += ' is-dismissible';
		}


		var html = '<div class="' + classes + '"><p>' + message + '</p>';

		if ( dismissible ) {
			html += '<button type="button" class="notice-dismiss"><span class="screen-reader-text">';
			html += settings.textNoticeDismiss;
			html += '</span></button>';
		}

		html += '</div>';

		var $notice = $( html );

		$( '#post' ).before( $notice );

		var $button = $( '.notice-dismiss', $notice );

		$button.on( 'click', function( e ) {
			e.preventDefault();

			$notice.fadeTo( 100, 0, function() {
				$notice.slideUp( 100, function() {
					$notice.remove();
				} );
			} );
		} );
	}

	var SendUserEmail = function() {
		this.$field = null;
		this.$button = null;
		this.$spinner = null;
	}

	SendUserEmail.prototype.bind = function() {
		this.$field = $( '#happyforms-message-send-email-field' );
		this.$button = $( '#happyforms-message-send-email-submit' );
		this.$spinner = this.$button.prev();
		this.$button.on( 'click', this.onClick.bind( this ) );
		this.$field.on( 'keydown', this.onKeyDown.bind( this ) );
	}

	SendUserEmail.prototype.onClick = function( e ) {
		e.preventDefault();

		this.$button.prop( 'disabled', true );
		this.$spinner.css( 'visibility', 'visible' );

		var url = this.$button.attr( 'data-url' );
		var email = this.$field.val();

		$.post( url, { email: email }, this.onSubmit.bind( this ) );
	}

	SendUserEmail.prototype.onKeyDown = function( e ) {
		if ( event.which == 13 || event.keyCode == 13 ) {
			e.preventDefault();

			this.$button.trigger( 'click' );
		}
	}

	SendUserEmail.prototype.onSubmit = function( response ) {
		this.$field.val( '' );
		this.$spinner.css( 'visibility', 'hidden' );
		this.$button.prop( 'disabled', false );

		var status = response.success ? 'success' : 'error';

		happyForms.dashboard.addNotice( status, response.data.message, true );
		window.scrollTo( 0, 0 );
	}

	happyForms.dashboard.focusFirstResponseInput = function() {
		$( '.happyforms-edit-message-table input[type="text"],' +
		   ' .happyforms-edit-message-table input[type="number"],' +
		   ' .happyforms-edit-message-table textarea' ).first().trigger( 'focus' );
	}

	happyForms.dashboard.animateTableRow = function( $tr, colorFrom, colorTo ) {
		$tr.animate( { 'backgroundColor': colorFrom }, 'fast' )
			.animate( { backgroundColor: colorTo }, {
				complete: function() {
					$tr.css( 'backgroundColor', '' );
				}
			} );
	}

	var ActivityRowActions = function() {
		this.$link = null;
	}

	ActivityRowActions.prototype.bind = function() {
		this.$link = $( '.mark_not_spam a, .untrash a' );
		this.$link.on( 'click', this.onClick.bind( this ) );
	}

	ActivityRowActions.prototype.onClick = function( e ) {
		e.preventDefault();
		e.stopImmediatePropagation();

		window.location = $( e.target ).attr( 'href' );

		var $tr = $( e.target ).parents( 'tr' );
		$tr.removeClass( 'happyforms-message-unread' );
		happyForms.dashboard.animateTableRow( $tr, '#e7e7d3', 'rgba(249, 249, 249)' );
	}

	var FormTable = function() {
		this.$link = null;
	}

	FormTable.prototype.bind = function() {
		this.settings = ( 'undefined' !== typeof _happyFormsFormStatusSettings ) ? _happyFormsFormStatusSettings : false;
		this.$table = $( 'body.post-type-happyform .wp-list-table' );
		this.$restoreLink = $( 'body.post-type-happyform .restore a' );

		if ( this.$restoreLink.length ) {
			this.$restoreLink.on( 'click', this.onRestoreClick.bind( this ) );
		}

		this.rewordNoFormsInArchive();
		this.removeLinksFromArchivedForms();
	}

	FormTable.prototype.onRestoreClick = function( e ) {
		e.preventDefault();
		e.stopImmediatePropagation();

		window.location = $( e.target ).attr( 'href' );

		var $tr = $( e.target ).parents( 'tr' );
		happyForms.dashboard.animateTableRow( $tr, '#e7e7d3', 'rgba(249, 249, 249)' );
	}

	FormTable.prototype.removeLinksFromArchivedForms = function() {
		$( 'tr.type-happyform.status-archive' ).each( function() {
			var $this = $( this );
			var $linkWrap = $( '.column-title > strong', $this );
			var linkText = $( 'a.row-title', $this ).text();

			$( 'a.row-title', $this ).remove();
			$linkWrap.text( linkText );
		} );
	}

	FormTable.prototype.rewordNoFormsInArchive = function() {
		if ( ! this.settings ) {
			return;
		}

		$( 'tr.no-items td', this.$table ).text( this.settings.labels.not_found_in_archive );
	}

	var dashboardInit = happyForms.dashboard.init;

	happyForms.dashboard.sendUserEmail = new SendUserEmail();
	happyForms.dashboard.activityRowActions = new ActivityRowActions();
	happyForms.dashboard.formTable = new FormTable();

	happyForms.dashboard.init = function() {
		dashboardInit.apply( this, arguments );

		this.sendUserEmail.bind();
		this.focusFirstResponseInput();
		this.activityRowActions.bind();
		this.formTable.bind();
	}

} )( jQuery, _happyFormsAdmin );
