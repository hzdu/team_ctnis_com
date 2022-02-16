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
			this.$selectDropdown = null;
			this.$selectInput = null;
			this.$currentCode = $( '.happyforms-country-select__selected-country .happyforms-country-code span', this.$el );

			this.$input.on( 'keyup', this.triggerChange.bind( this ) );
			this.$input.on( 'change', this.triggerChange.bind( this ) );
			this.$input.on( 'focus', this.onInputFocus.bind(this) );
			this.$input.on( 'blur', this.onBlur.bind(this) );

			if ( this.masked ) {
				this.initCleave();
				this.initCountryDropdown();
			}

			this.initTooltip();
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
			var $select = $( '.happyforms-custom-select-dropdown', this.$el );
			var $countryTrigger = $( '.happyforms-country-select-trigger', this.$el );

			$countryTrigger.on( 'click', this.handleTrigger.bind( this ) );
			$( window ).on( 'click', this.maybeCloseDropdown.bind( this ) );
			$( document ).on( 'keydown', this.handleUpDownKey.bind( this ) );

			$visualInput.happyFormsSelect( {
				$input: $input,
				$select: $select,
				searchable: false,
				required: this.required,
			} );

			$select.on( 'click', 'li', self.onItemSelect.bind( self ) );
			this.$selectDropdown = $select;
			this.$selectInput = $visualInput;
		},

		handleTrigger: function( e ) {
			e.preventDefault();
		},

		onItemSelect: function( e ) {
			var $li;
			var $target = $(e.target);

			if ( 'click' === e.type ) {
				if ( ! $target.is('li') ) {
					$li = $(e.target).parent('li');
				} else {
					$li = $target;
				}
			}

			if ( 'keyup' === e.type ) {
				if ( 'Enter' !== e.key ) {
					return false;
				}

				$li = $(e.target);
			}

			this.selectItem( $li );
		},

		selectItem: function ( $li ) {
			this.$countryCode.val($li.attr('data-code'));
			this.$country.val($li.attr('data-country'));

			this.$currentCode.text( '+' + $li.attr( 'data-code' ) );

			// re-init cleave
			this.destroyCleave();
			this.initCleave();

			this.cleaveInstances.map(function(i, instance) {
				instance.setRawValue('');
			});

			this.$phoneInput.trigger( 'focus' );

			this.maybeCloseDropdown();
		},

		maybeCloseDropdown: function (e) {
			this.$selectInput.trigger( 'blur' );
		},

		handleUpDownKey: function (e) {
			if ( this.$selectDropdown.is( ':visible' ) ) {
				if( e.keyCode == 13 ){
					var $li = $( 'li.active', this.$selectDropdown );

					this.selectItem( $li );
					e.preventDefault();
				} else {
					this.$selectInput.trigger( 'happyFormsSelect.submitted', e );
				}
			}
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
