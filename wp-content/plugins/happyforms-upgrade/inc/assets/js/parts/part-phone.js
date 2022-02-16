( function ( $, _, Backbone, api, settings ) {

	happyForms.classes.models.parts.phone = happyForms.classes.models.Part.extend( {
		defaults: function () {
			return _.extend(
				{},
				settings.formParts.phone.defaults,
				_.result( happyForms.classes.models.Part.prototype, 'defaults' ),
			);
		},
	} );

	happyForms.classes.views.parts.phone = happyForms.classes.views.Part.extend( {
		template: '#happyforms-customize-phone-template',

		events: _.extend({}, happyForms.classes.views.Part.prototype.events, {
			'change [name=masked]': 'onMaskedChange',
		}),

		initialize: function () {
			happyForms.classes.views.Part.prototype.initialize.apply( this, arguments );

			this.listenTo( this.model, 'change:mask_phone_country', this.refreshPhonePart );
			this.listenTo( this.model, 'change:mask_allow_only_this_convention', this.refreshPhonePart );
		},

		/**
		 * Toggle masked input configuration on `Mask this input` checkbox change.
		 *
		 * @since 1.0.0.
		 *
		 * @param {object} e JS event.
		 *
		 * @return void
		 */
		onMaskedChange: function (e) {
			var $input = $(e.target);
			var attribute = $input.data('bind');
			var $maskWrapper = $( '.happyforms-nested-settings[data-trigger="masked"]', this.$el );

			if ($input.is(':checked')) {
				this.model.set(attribute, 1);
				$maskWrapper.show();
			} else {
				this.model.set(attribute, 0);
				$maskWrapper.hide();
			}

			var model = this.model;

			this.model.fetchHtml( function ( response ) {
				var data = {
					id: model.get('id'),
					html: response,
				};

				happyForms.previewSend( 'happyforms-form-part-refresh', data );
			} );
		},

		refreshPhonePart: function( model, value ) {
			model.fetchHtml(function (response) {
				var data = {
					id: model.get('id'),
					html: response
				};

				happyForms.previewSend( 'happyforms-form-part-refresh', data );
			});
		}
	} );

	happyForms.previewer = _.extend( happyForms.previewer, {
		onPhoneCountryChangeCallback: function( id, html, options, $ ) {
			var part = this.getPartModel( id );
			var $part = this.getPartElement( html );

			$part.attr( 'data-country', part.get( 'mask_phone_country' ) );
			$.fn.happyFormPart.call( $part, 'reinit' );
		},
	} );

} )( jQuery, _, Backbone, wp.customize, _happyFormsSettings );
