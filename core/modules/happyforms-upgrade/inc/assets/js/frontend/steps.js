( function( $ ) {
	'use strict';

	var HappyFormsProgressBar = function( el, options ) {
		this.el = el;
		this.$el = $( this.el );
		this.$formContainer = this.$el.parent( '.happyforms-form' );

		this.$currentLi = $( 'li.current', this.$el );
		this.currentStep = 0;

		this.init();
	}

	HappyFormsProgressBar.prototype.init = function() {
		this.$formContainer.on( 'happyforms-init', this.onFormInit.bind( this ) );
		this.$formContainer.on( 'happyforms.submitted', this.handleFormComplete.bind( this ) );
	}

	HappyFormsProgressBar.prototype.onFormInit = function( e ) {
		var $form = $( 'form', e.target );

		this.currentStep = $form.attr( 'data-happyforms-break' );

		if ( 0 <= this.currentStep ) {
			this.$formContainer.addClass( 'progressed' );
		}

		$form.on( 'happyforms-scroll', this.onFormScroll.bind( this ) );

		this.updateStep();
	}

	HappyFormsProgressBar.prototype.onFormScroll = function( e ) {
		var $notices = $( '.happyforms-message-notices', this.$formContainer );

		if ( 0 < $notices.length ) {
			return;
		}

		e.preventDefault();
		var offset = this.$el.offset().top;

		$( 'html, body' ).animate( {
			scrollTop: offset + 'px'
		}, 500 );
	}

	HappyFormsProgressBar.prototype.updateStep = function() {
		$( 'li', this.$el ).removeClass( 'current' );

		this.$currentLi.removeClass( 'current' ).addClass( 'completed' );

		this.$currentLi = $( 'li[data-step='+ this.currentStep +']', this.$el );
		this.$currentLi.removeClass( 'completed' );
		this.$currentLi.nextAll( 'li' ).removeClass( 'completed' ).removeClass( 'current' );
		this.$currentLi.addClass( 'current' );
	}

	HappyFormsProgressBar.prototype.handleFormComplete = function( e, response ) {
		if( response.data.hide_steps ) {
			$( '.happyforms-form__progress' ).hide();
		}
	}

	$.fn.happyFormsProgressBar = function( method ) {
		this.each(function() {
			if ( ! method ) {
				$.data( this, 'HappyFormsProgressBar', new HappyFormsProgressBar( this, method ) );
			} else {
				var methods = $.data( this, 'HappyFormsProgressBar' );

				if ( methods && methods[method] ) {
					return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
				}
			}
		});
	}

	$( document ).on( 'happyforms-init', function( e ) {
		var $form = $( e.target );

		$( '.happyforms-form-progress', $form ).happyFormsProgressBar();
	} );
} ) ( jQuery );
