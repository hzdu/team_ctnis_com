( function( $, _, Backbone, api, settings ) {

	happyForms.classes.models.parts.attachment = happyForms.classes.models.Part.extend( {
		defaults: function() {
			return _.extend(
				{},
				settings.formParts.attachment.defaults,
				_.result( happyForms.classes.models.Part.prototype, 'defaults' ),
			);
		},
	} );

	happyForms.classes.views.parts.attachment = happyForms.classes.views.Part.extend( {
		template: '#customize-happyforms-attachment-template',

		events: _.extend( {}, happyForms.classes.views.Part.prototype.events, {
			'click .happyforms-show-file-extensions a': 'onShowFileExtensionsClick',
			'click .happyforms-hide-file-extensions a': 'onHideFileExtensionsClick',
		} ),

		initialize: function() {
			happyForms.classes.views.Part.prototype.initialize.apply(this, arguments);

			this.listenTo( this.model, 'change:allowed_file_types', this.onAllowedFileTypesChange );
			this.listenTo( this.model, 'change:max_file_count', this.onMaxFileCountChange );
			this.listenTo( this.model, 'change:placeholder', this.onAttachmentPlaceholderChange );
			this.listenTo( this.model, 'change:file_limit_of_label', this.onFileLimitOfLabelChange );
			this.listenTo( this.model, 'change:max_files_uploaded_label', this.onMaxFilesUploadedLabelChange );
			this.listenTo( this.model, 'change:use_max_file_count', this.onUseMaxFileCountChange );
		},

		onAllowedFileTypesChange: function( model, value ) {
			if ( 'custom' === value ) {
				$( '.happyforms-nested-settings[data-trigger="allowed_file_types:custom"]', this.$el ).show();
			} else {
				$( '.happyforms-nested-settings[data-trigger="allowed_file_types:custom"]', this.$el ).hide();
			}
		},

		onShowFileExtensionsClick: function( e ) {
			$( '.happyforms-show-file-extensions', this.$el ).hide();
			$( '.happyforms-hide-file-extensions', this.$el ).show();
			$( '.happyforms-file-extensions', this.$el ).css( 'display', 'block' );
		},

		onHideFileExtensionsClick: function( e ) {
			$( '.happyforms-hide-file-extensions', this.$el ).hide();
			$( '.happyforms-show-file-extensions', this.$el ).show();
			$( '.happyforms-file-extensions', this.$el ).hide();
		},

		onUseMaxFileCountChange: function( model, value ) {
			var value = this.model.get( 'use_max_file_count' );

			if ( 1 == value ) {
				$( '[data-bind="max_file_count"]', this.$el ).val( 1 );
				this.model.set( 'max_file_count', 1 );

				$( '.happyforms-nested-settings[data-trigger=use_max_file_count]', this.$el ).show();
			} else {
				$( '[data-bind="max_file_count"]', this.$el ).val( 0 );
				this.model.set( 'max_file_count', 0 );

				$( '.happyforms-nested-settings[data-trigger=use_max_file_count]', this.$el ).hide();
			}

			this.model.fetchHtml( function( response ) {
				var data = {
					id: model.get( 'id' ),
					html: response,
				};

				happyForms.previewSend( 'happyforms-form-part-refresh', data );
			} );
		},

		onMaxFileCountChange: function( model, value ) {
			var data = {
				id: model.id,
				callback: 'onMaxFileCountChangeCallback',
			};

			happyForms.previewSend( 'happyforms-part-dom-update', data );
		},

		onAttachmentPlaceholderChange: function( model, value ) {
			var data = {
				id: model.id,
				callback: 'onAttachmentPlaceholderChangeCallback',
			};

			happyForms.previewSend( 'happyforms-part-dom-update', data );
		},

		onFileLimitOfLabelChange: function( model, value ) {
			var data = {
				id: model.id,
				callback: 'onAttachmentFileLimitOfLabelChangeCallback',
			};

			happyForms.previewSend( 'happyforms-part-dom-update', data );
		},


	} );

	happyForms.previewer = _.extend( happyForms.previewer, {
		onAttachmentPlaceholderChangeCallback: function( id, html, options, $ ) {
			var part = this.getPartModel( id );
			var $part = this.getPartElement( html );
			var $placeholder = this.$( '.happyforms-attachment-progress[data-type=default]', $part );

			$placeholder.text( part.get( 'placeholder' ) );
		},

		onMaxFileCountChangeCallback: function( id, html, options ) {
			var part = this.getPartModel( id );
			var $part = this.getPartElement( html );

			$( '.happyforms-part__el .happyforms-attachment__counter .total', $part ).html( part.get( 'max_file_count' ) );
		},
	} );

} ) ( jQuery, _, Backbone, wp.customize, _happyFormsSettings );
