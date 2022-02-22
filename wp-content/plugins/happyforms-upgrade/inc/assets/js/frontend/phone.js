( function( $, settings ) {

	HappyForms.parts = HappyForms.parts || {};

	HappyForms.parts.phone = {
		init: function() {
			this.type = this.$el.data( 'happyforms-type' );
			this.$input = $( '.happyforms-part__el input', this.$el );
			this.$phoneInput = $( '[type="tel"]', this.$el );
			this.masked = this.$el.attr( 'data-mask' );
			this.$countryCode = $( 'input.happyforms-phone-code', this.$el );
			this.$country = $( 'input.happyforms-phone-country', this.$el );
			this.prefix = '';
			this.$currentCode = $( '.happyforms-country-select__selected-country .happyforms-country-code span', this.$el );

			this.$input.on( 'keyup', this.triggerChange.bind( this ) );
			this.$input.on( 'change', this.triggerChange.bind( this ) );
			this.$input.on( 'focus', this.onInputFocus.bind(this) );
			this.$input.on( 'blur', this.onBlur.bind(this) );

			if ( this.masked ) {
				this.initCleave();
				this.initCountryDropdown();
			}

			this.onBlur();
		},

		reinit: function() {
			this.destroyCleave();
			this.init();
		},

		destroyCleave: function() {
			$.each(this.cleaveInstances, function (i, instance) {
				instance.destroy();
			});
		},

		initCleave: function() {
			var self = this;

			if ( this.masked ) {
				this.cleaveInstances = this.$input.not('[type="hidden"]').map(function (i, input) {
					var $input = $(input);
					var code = self.$countryCode.val();
					var rawValue = $input.val();

					this.prefix = code;

					var cleave = new Cleave($input, {
						phone: true,
						phoneRegionCode: settings.codes[code],
						rawValueTrimPrefix: true
					});

					cleave.setRawValue( rawValue );

					return cleave;
				}.bind(this));
			}
		},

		initCountryDropdown: function() {
			var self = this;
			var $input = $( '.happyforms-phone-code', this.$el );
			var $visualInput = $( 'input[type="text"]', this.$el );
			var $select = $( 'select.happyforms-select', this.$el );

			$select.on( 'change', self.onItemSelect.bind( self ) );
		},

		onItemSelect: function( e ) {
			var $li;
			var $target = $(e.target);

			var $selected = $target.find( 'option:selected' );

			this.$countryCode.val( $selected.data( 'code' ) );
			this.$country.val( $selected.data( 'country' ) );

			$selectedText = '+' + $selected.data( 'code' );
		 	$target.find( 'option:first' ).text( $selectedText ).prop( 'selected', true );

 			var textLength = $selectedText.length;
 			var width = 65;

 			if ( textLength > 2 ) {
 				width = ( $selectedText.length * 23 ) + 10;
 			}

 			$target.css( 'width', width + 'px' );

			// re-init cleave
			this.destroyCleave();
			this.initCleave();

			this.cleaveInstances.map(function(i, instance) {
				instance.setRawValue('');
			});

			this.$phoneInput.trigger( 'focus' );
		},

		selectItem: function ( $li ) {
			this.$countryCode.val($li.attr('data-code'));
			this.$country.val($li.attr('data-country'));

			this.$currentCode.text( '+' + $li.attr( 'data-code' ) );


		},


		isFilled: function() {
			var prefix = this.prefix;

			var filledInputs = this.$input.filter( function() {
				var value = $( this ).val().replace( prefix, '' ).trim();

				return '' !== value;
			} );

			return filledInputs.length > 0;
		},

		onBlur: function() {
			if ( '' !== this.prefix ) {
				return;
			}

			if ( this.$el.is( '.happyforms-part--label-as_placeholder' ) ) {
				if ( this.isFilled() ) {
					this.$el.addClass( 'happyforms-part--filled' );
				} else {
					this.$el.removeClass( 'happyforms-part--filled' );
				}
			}

			this.$el.removeClass( 'focus' );
		},

		serialize: function() {
			var self = this;

			var serialized = this.$input.map( function( i, input ) {
				var $input = $( input );
				var keyValue = {
					name: $input.attr( 'name' ),
					value: $input.val(),
				};

				if ( self.masked ) {
					self.cleaveInstances.map( function(i, instance) {
						if ( instance.element === input ) {
							keyValue.value = self.cleaveInstances[i].getRawValue();
						}
					});
				}

				return keyValue;
			} ).toArray();

			return serialized;
		},
	};

} )( jQuery, HappyFormsPhoneSettings );
