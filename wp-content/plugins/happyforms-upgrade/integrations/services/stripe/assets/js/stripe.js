( function( $, Cookies, settings ) {
	$( function() {
		var HappyFormsStripe = function( el ) {
			this.el = el;
			this.$el = $( el );
			this.$form = $( 'form', this.$el );
			this.$paymentsPart = $( '[data-happyforms-type=payments]', this.$form );

			this.formID = $( '[name=happyforms_form_id]', this.$form ).val();
			this.stripe = '';
			this.elements = {};
			this.checkoutDataKey = 'happyforms_' + this.formID + '_stripe_checkout';

			this.init();
		}

		HappyFormsStripe.prototype.init = function() {
			if ( ! settings.key || ! this.$paymentsPart.length ) {
				return;
			}

			if ( this.$el.attr( 'data-stripe-enabled' ) ) {
				return;
			}

			// init stripe
			this.stripe = Stripe( settings.key, { locale: this.$paymentsPart.data( 'happyforms-stripe-locale' ) } );

			// set attribute so we know next time that Stripe init already happend here
			this.$el.attr( 'data-stripe-enabled', '' );

			this.createCheckoutData();
			this.initStripeElements();

			this.$form.on( 'happyforms.submitted', this.handlePayment.bind( this ) );
			this.$paymentsPart.on( 'happyforms.cssvar', this.updatePlaceholderColor.bind( this ) );
		},

		HappyFormsStripe.prototype.destroy = function() {
			this.$form.off( 'happyforms.submitted' );
			this.$paymentsPart.off( 'happyforms.cssvar' );
			this.$el.data( 'HappyFormsStripe', false );
		},

		HappyFormsStripe.prototype.updatePlaceholderColor = function( event, data ) {
			if ( ! data ) {
				return;
			}

			if ( '--happyforms-color-part-placeholder' === data.name ) {
				var args = {
					'placeholder': data.value
				};

				this.initStripeElements( args );
			}
		},

		/**
		 * Initialize Stripe Card Element and let it inherit form styles.
		 *
		 * @param {array} options Extra options.
		 */
		HappyFormsStripe.prototype.initStripeElements = function( options ) {
			var elements = this.stripe.elements();

			var formComputedStyle = window.getComputedStyle( this.el );
			var partComputedStyle = window.getComputedStyle( this.$paymentsPart[0] );

			var placeholderColor = formComputedStyle.getPropertyValue( '--happyforms-color-part-placeholder' );

			if ( options && options.placeholder ) {
				placeholderColor = options.placeholder;
			}

			var elementsStyle = {
				base: {
					fontSize: formComputedStyle.getPropertyValue( '--happyforms-part-value-font-size' ).trim(),
					fontFamily: partComputedStyle.getPropertyValue( 'font-family' ),
					color: partComputedStyle.getPropertyValue( 'color' ),
					'::placeholder': {
						color: placeholderColor
					}
				},
				invalid: {
					color: partComputedStyle.getPropertyValue( 'color' )
				}
			};

			var paymentsPartID = this.$paymentsPart.data( 'happyforms-id' );
			var partID = 'happyforms-' + this.formID + '_' + paymentsPartID;

			this.elements['card'] = elements.create( 'card', {
				hidePostalCode: ( 1 == settings.hidePostalCode ) ? true : false,
				style: elementsStyle
			} );
			this.elements['card'].mount( '#' + partID + '_stripe_card' );
			this.elements['card'].on( 'change', this.onElementChange.bind( this ) );
		},

		/**
		 * Set error state on Stripe element so it has a look and feel of our proprietary messages.
		 *
		 * @param {string} message Message as returned by Stripe API.
		 */
		HappyFormsStripe.prototype.setError = function( message ) {
			$error = $( '.happyforms-part-error-notice', this.$paymentsPart );
			$( '.credit-card-filled', this.$paymentsPart ).val( 0 );

			$( 'span', $error ).text( message );
			$error.show();
		},

		/**
		 * Hides error from Stripe element.
		 */
		HappyFormsStripe.prototype.hideError = function() {
			$error = $( '.happyforms-part-error-notice', this.$paymentsPart );
			$( 'span', $error ).text( '' );
			$error.hide();
		},

		HappyFormsStripe.prototype.onElementChange = function( e ) {
			this.hideError();

			if ( e.complete ) {
				this.setPaymentMethod();
				return;
			}

			if ( ! e.error || e.empty ) {
				return;
			}

			this.setError( e.error.message );
		},

		/**
		 * Creates a cookie with payment method ID for future reference.
		 */
		HappyFormsStripe.prototype.createCheckoutData = function() {
			var data = {
				payment_method: '',
			};

			if ( ! Cookies.get( this.checkoutDataKey ) ) {
				Cookies.set( this.checkoutDataKey, data );
			}
		},

		/**
		 * Update checkout data cookie with new data.
		 *
		 * @param {string} key Key of the data to be updated.
		 * @param {string} value New value.
		 */
		HappyFormsStripe.prototype.updateCheckoutData = function( key, value ) {
			if ( ! Cookies.get( this.checkoutDataKey ) ) {
				this.createCheckoutData();
			}

			var checkoutData = JSON.parse( Cookies.get( this.checkoutDataKey ) );

			checkoutData[key] = value;

			Cookies.set( this.checkoutDataKey, checkoutData );
		},

		/**
		 * Gets checkout data as a JSON. If no checkout data are present, it creates one.
		 */
		HappyFormsStripe.prototype.getCheckoutData = function() {
			if ( ! Cookies.get( this.checkoutDataKey ) ) {
				this.createCheckoutData();
			}

			var data = JSON.parse( Cookies.get( this.checkoutDataKey ) );

			return data;
		},

		/**
		 * Remove checkout data cookie. This is called when payment is complete.
		 */
		HappyFormsStripe.prototype.clearCheckoutData = function() {
			Cookies.remove( this.checkoutDataKey );
		},

		/**
		 * Sets payment method (ID) to checkout data and changes value of credit-card-filled element to `1`.
		 */
		HappyFormsStripe.prototype.setPaymentMethod = async function() {
			var paymentMethod = await this.createPaymentMethod();
			var $submitButton = $( '.happyforms-button--submit', this.$form );

			$submitButton.attr( 'disabled', 'disabled' );

			if ( ! paymentMethod ) {
				return;
			}

			$( '.credit-card-filled', this.$paymentsPart ).val( 1 );
			$submitButton.prop( 'disabled', false );

			this.updateCheckoutData( 'payment_method', paymentMethod.id );
		},

		/**
		 * Handles payment on form submit.
		 *
		 * @param {object} e Event.
		 * @param {json} response Form response data.
		 */
		HappyFormsStripe.prototype.handlePayment = async function( e, response ) {
			if ( ! response.success ) {
				return;
			}

			if ( ! response.data.stripe || ! response.data.stripe.intent ) {
				return;
			}

			var self = this;
			var paymentSuccess = false;
			var checkoutData = this.getCheckoutData();

			if ( ! checkoutData.payment_method ) {
				return;
			}

			// Call Stripe API to handle card payment using payment intent's secret and payment method ID.
			await this.stripe.handleCardPayment(
				response.data.stripe.intent.secret,
				{
					payment_method: checkoutData.payment_method
				}
			).then( function( result ) {
				if ( result.paymentIntent && 'succeeded' === result.paymentIntent.status ) {
					paymentSuccess = true;
				}

				// If payment succeeded in Stripe API, call backend to handle post-payment procedures.
				$.ajax( {
					url: settings.ajaxurl,
					data: {
						action: 'happyforms_stripe_authorize_payment',
						form_id: self.formID,
						response_id: response.data.stripe.response_id,
						intent_id: response.data.stripe.intent.id,
						nonce: settings.nonce,
						success: paymentSuccess
					}
				} ).done( self.onPaymentComplete.bind( self ) );
			} );
		},

		/**
		 * Clean up, set success/error message to form and re-initiate on successful payment.
		 *
		 * @param {json} response Form response data.
		 */
		HappyFormsStripe.prototype.onPaymentComplete = function( response ) {
			if ( ! response.data ) {
				return;
			}

			var self = this;

			setTimeout( function() {
				self.clearCheckoutData();
			}, 500 );

			var $loadingNotice = $( '.happyforms-stripe-authorization-notices' );
			$loadingNotice.replaceWith( response.data );
			this.$el.happyFormsStripe( 'destroy' );
			this.$el.happyFormsStripe();
		},

		HappyFormsStripe.prototype.createPaymentMethod = async function() {
			if ( ! this.elements.card ) {
				return;
			}

			var paymentMethod = '';

			await this.stripe.createPaymentMethod( 'card', this.elements.card ).then( function( result ) {
				paymentMethod = result.paymentMethod;
			} );

			return paymentMethod;
		}

		$.fn.happyFormsStripe = function( method ) {
			if ( 'string' === typeof method ) {
				var instance = $( this ).data( 'HappyFormsStripe' );

				if ( instance && instance[method] ) {
					return instance[method].apply( instance, Array.prototype.slice.call( arguments, 1 ) );
				}
			} else {
				this.each( function() {
					$.data( this, 'HappyFormsStripe', new HappyFormsStripe( this ) );
				} );
			}
		}

		$( document ).on( 'happyforms-init', '.happyforms-form', function( e ) {
			$( this ).happyFormsStripe();
		} );
	} );
} )( jQuery, Cookies, _happyFormsStripeSettings );
