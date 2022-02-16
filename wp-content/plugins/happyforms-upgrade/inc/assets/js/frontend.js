( function( $, settings ) {

	HappyForms.parts = HappyForms.parts || {};

	HappyForms.parts.base = {
		init: function() {
			this.type = this.$el.data( 'happyforms-type' );
			this.$input = $( 'input, textarea, select', this.$el );

			this.$input.on( 'keyup change', this.triggerChange.bind( this ) );
			this.$input.on( 'blur', this.onBlur.bind( this ) );
			this.$input.on( 'focus', this.onInputFocus.bind( this ) );

			this.initTooltip();
			this.onBlur();
		},

		getType: function() {
			return this.type;
		},

		onInputFocus: function() {
			this.$el.addClass( 'focus' );
		},

		onBlur: function() {
			if ( this.$el.is( '.happyforms-part--label-as_placeholder' ) ) {
				if ( this.isFilled() ) {
					this.$el.addClass( 'happyforms-part--filled' );
				} else {
					this.$el.removeClass( 'happyforms-part--filled' );
				}
			}

			this.$el.removeClass( 'focus' );
		},

		triggerChange: function( data ) {
			this.$el.trigger( 'happyforms-change', data );
		},

		isRequired: function() {
			var isRequired = (
				this.$el.is( ':visible' )
				&& this.$el.is( '[data-happyforms-required]' )
			);

			return isRequired;
		},

		isFilled: function() {
			var filledInputs = this.$input.filter( function() {
				var $input = $( this );
				var hasValue = false;

				if ( $input.is( '[type=checkbox]' ) || $input.is( '[type=radio]' ) ) {
					hasValue = $input.is( ':checked' );
				} else {
					hasValue = '' !== $input.val();
				}

				return hasValue;
			} );

			return filledInputs.length > 0;
		},

		serialize: function() {
			var serialized = this.$input.map( function( i, input ) {
				var $input = $( input );
				var keyValue = {
					name: $input.attr( 'name' ),
					value: $input.val(),
				};

				if ( $input.is( '[type=checkbox]' ) || $input.is( '[type=radio]' ) ) {
					if ( ! $input.is( ':checked' ) ) {
						return;
					}
				}

				return keyValue;
			} ).toArray();

			return serialized;
		},

		isValid: function() {
			var valid = true;

			var type = this.$el.data( 'happyforms-type' );

			if ( ! this.$input ) {
				return valid;
			}

			if ( this.isRequired() ) {
				valid = valid && this.isFilled();
			}

			return valid;
		},

		initTooltip: function() {
			if ( ! $.fn.tooltip ) {
				return;
			}

			var $form = this.$el.closest( 'form' );
			var formStyles = getComputedStyle( $form[0] );

			var descriptionProperties = [
				'--happyforms-color-part-description',
				'--happyforms-color-part-background',
				'--happyforms-part-description-font-size',
				'--happyforms-color-part-border',
				'font-family',
				'letter-spacing',
			];

			$( '.happyforms-tooltip__trigger', this.$el ).on( 'click', function( e ) {
				e.preventDefault();
			} );

			$( '.happyforms-tooltip__trigger', this.$el ).tooltip( {
				tooltipClass: 'happyforms-tooltip-ui',
				position: {
					my: 'bottom',
					at: 'center top',
				},
				open: function( event, ui ) {
					if ( ! event.srcElement ) {
						return;
					}

					var originalHeight = ui.tooltip.height();

					descriptionProperties.forEach( function( variable ) {
						var value = formStyles.getPropertyValue( variable );
						ui.tooltip[0].style.setProperty( variable, value );
					} );

					var newHeight = ui.tooltip.height();
					var heightDifference;

					if ( originalHeight > newHeight ) {
						heightDifference = originalHeight - newHeight;
						ui.tooltip.css( 'top', '+=' + heightDifference );
					} else {
						heightDifference = newHeight - originalHeight;
						ui.tooltip.css( 'top', '-=' + heightDifference );
					}

					if ( $( event.srcElement ).offset().top < ui.tooltip.offset().top ) {
						ui.tooltip.addClass( 'happyforms-tooltip-ui--bottom' );
					}
				},
			} );
		},

		destroy: function() {
			var $parts = $( '[data-happyforms-type]', this.$form );

			$parts.each( function() {
				$( this ).trigger( 'happyforms.detach' );
			} );

			this.$el.data( 'HappyFormPart', false );
		}
	}

	HappyForms.wrapPart = function( $part, $form ) {
		var type = $part.data( 'happyforms-type' );
		var partMethods = HappyForms.parts.base;

		if ( HappyForms.parts[type] ) {
			partMethods = $.extend( {}, HappyForms.parts.base, HappyForms.parts[type] );
		}

		$part.happyFormPart( partMethods, {
			form: $form,
		} );
	}

	HappyForms.Form = function( el ) {
		this.el = el;
		this.$el = $( this.el );
		this.$form = $( 'form', this.$el );
		this.$parts = $( '[data-happyforms-type]', this.$form );
		this.$submits = $( '[type="submit"]', this.$form );
		this.$submit = $( '[type="submit"]', this.$form );
		this.$submitLinks = $( 'button.submit', this.$form );
		this.$step = $( '[name="happyforms_step"]', this.$form );

		this.init();
	}

	HappyForms.Form.prototype = {
		init: function() {
			var $form = this.$form;
			var $parts = $( '[data-happyforms-type]', this.$form );

			$parts.each( function() {
				var $part = $( this );
				var type = $part.data( 'happyforms-type' );

				HappyForms.wrapPart( $part, $form );
			} );

			this.$el.trigger( 'happyforms-change' );
			this.$el.trigger( 'happyforms-init' );

			// Reset in case of previous initialization
			this.$form.off( 'submit' );
			this.$submit.off( 'click' );
			this.$submitLinks.off( 'click' );

			this.$form.on( 'submit', this.submit.bind( this ) );
			this.$submit.on( 'click', this.buttonSubmit.bind( this ) );
			this.$submitLinks.on( 'click', this.linkSubmit.bind( this ) );
			this.$el.on( 'happyforms-scrolltop', this.onScrollTop.bind( this ) );
		},

		detach: function() {
			this.$el.off( 'happyforms-change' );
			this.$el.off( 'happyforms-scrolltop' );
			var $parts = $( '[data-happyforms-type]', this.$form );
			$parts.remove();
		},

		serialize: function( submitEl ) {
			var action = $( '[name=action]', this.$form ).val();
			var form_id = $( '[name=happyforms_form_id]', this.$form ).val();
			var nonce = $( '[name=happyforms_message_nonce]', this.$form ).val();
			var referer = $( '[name=_wp_http_referer]', this.$form ).val();
			var step = this.$step.val();

			var formData = [
				{ name: 'action', value: action },
				{ name: 'happyforms_form_id', value: form_id },
				{ name: 'happyforms_step', value: step },
				{ name: 'happyforms_message_nonce', value: nonce },
				{ name: 'referer', value: referer },
			];

			var honeypotNames = [ 'single_line_text', 'multi_line_text', 'number' ];

			for (var h = 0; h < honeypotNames.length; h ++) {
				var inputName = form_id + '-' + honeypotNames[h];
				var $input = $( '[name=' + inputName + ']' );

				if ( $input.length ) {
					formData.push( {
						name: inputName,
						value: $input.val(),
					} );

					break;
				}
			}

			var $parts = $( '[data-happyforms-type]', this.$form );
			var partData = $parts.map( function( i, part ) {
				return $( part ).happyFormPart( 'serialize' );
			} )
			.toArray()
			.filter( function( entry ) {
				return null !== entry.name && undefined !== entry.name;
			} );

			var data = formData.concat( partData );

			var querystring = data
				.map( function( part ) {
					return part.name + '=' + encodeURIComponent( part.value );
				} )
				.join( '&' );

			return querystring;
		},

		buttonSubmit: function( e ) {
			if ( e.target.hasAttribute( 'data-step' ) ) {
				this.$step.val( e.target.getAttribute( 'data-step' ) );
			}
		},

		linkSubmit: function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();

			if ( e.target.hasAttribute( 'data-step' ) ) {
				this.$step.val( e.target.getAttribute( 'data-step' ) );
			}

			this.$form.trigger( 'submit' );
		},

		submit: function( e ) {
			e.preventDefault();

			this.$form.addClass( 'happyforms-form--submitting' );
			this.$submits.prop( 'disabled', true );

			var async = ( 'undefined' === typeof this.$form.attr( 'data-happyforms-redirect-blank' ) );

			$.ajax( {
				type: 'post',
				async: async,
				data: this.serialize( e.target ),
			} ).done( this.onSubmitComplete.bind( this ) );
		},

		onSubmitComplete: function( response ) {
			this.$form.trigger( 'happyforms.submitted', response );

			if ( ! response.data ) {
				return false;
			}

			if ( true === response.success && response.data.redirect ) {
				if ( ! response.data.redirect_to_blank ) {
					window.location.replace( response.data.redirect );
					return false;
				} else {
					window.open( response.data.redirect, '_blank' );
				}
			}

			if ( response.data.html ) {
				var $el = $( response.data.html );
				var $parts = $( '[data-happyforms-type]', this.$form );

				$parts.each( function() {
					$( this ).trigger( 'happyforms.detach' );
				} );

				this.detach();

				var $form = $( 'form', $el );
				$( 'form', this.$el ).replaceWith( $form );

				this.$el.happyForm();

				// User filterable
				if ( $form.attr( 'data-happyforms-scroll-disabled' ) ) {
					return;
				}

				var elemCoordinates = this.$el.get( 0 ).getBoundingClientRect();

				if( elemCoordinates.top < 0 ) {
					var elTopOffset = this.$el.offset().top;
					var $notices = $( '.happyforms-message-notices', this.$el );

					// User filterable
					var increment = $form.attr( 'data-happyforms-scroll-offset' );

					if ( increment ) {
						increment = parseInt( increment, 10 );
						elTopOffset += increment;
					}

					this.$el.trigger( 'happyforms-scrolltop', elTopOffset );
				}
			}
		},

		onScrollTop: function( e, offset ) {
			if ( e.isDefaultPrevented() ) {
				return;
			}

			$( 'html, body' ).animate( {
				scrollTop: offset + 'px'
			}, 500 );
		}
	}

	HappyForms.Part = function( el ) {
		this.el = el;
		this.$el = $( this.el );
	}

	$.fn.happyFormPart = function( method ) {
		var args = arguments;

		if ( 'object' === typeof method ) {
			var part = new HappyForms.Part( this );
			$.extend( part, method );
			$( this ).data( 'HappyFormPart', part );
			part.init.apply( part, Array.prototype.slice.call( arguments, 1 ) );
		} else {
			var instance = $( this ).data( 'HappyFormPart' );

			if ( instance && instance[method] ) {
				return instance[method].apply( instance, Array.prototype.slice.call( arguments, 1 ) );
			}
		}
	}

	$.fn.happyForm = function ( method ) {
		this.each(function () {
			if ( ! method ) {
				$.data( this, 'HappyForm', new HappyForms.Form( this, arguments ) );
			} else {
				var instance = $.data( this, 'HappyForm' );

				if ( instance && instance[method] ) {
					return instance[ method ].apply( instance, Array.prototype.slice.call( arguments, 1 ) );
				}
			}
		} );
	}

	var Sessions = function() {
	};

	Sessions.prototype.bind = function() {
		$( window ).on( 'visibilitychange', this.onUnload.bind( this ) );
	};

	Sessions.prototype.onUnload = function( e ) {
		var data = new FormData();

		data.append( 'action', settings.actionAbandon );

		if( typeof HappyForms.formSessionWatcher !== 'undefined' &&
			 ! $.isEmptyObject( HappyForms.formSessionWatcher.abandonAlerts ) ) {
			data.append( 'sessions', JSON.stringify( HappyForms.formSessionWatcher.abandonAlerts ) );
		}

		navigator.sendBeacon( settings.ajaxUrl, data );
	};

	HappyForms.sessionWatcher = null;

	$( function() {
		$( '.happyforms-form' ).happyForm();

		HappyForms.sessionWatcher = new Sessions();
		HappyForms.sessionWatcher.bind();
	} );

} )( jQuery, _happyFormsSettings );