( function ( $ ) {

	HappyForms.parts = HappyForms.parts || {};

	HappyForms.parts.rank_order = {
		init: function () {
			this.$input = $( 'input, select', this.$el );
            this.$ranks = $( 'ul.happyforms-custom-select-dropdown', this.$el );
            this.required = 'undefined' === typeof this.$el.data( 'happyforms-required' ) ? false : true;
			var self = this;

			$( '.happyforms-custom-select', this.$el ).each( function() {
				var $part = $( this );
				var $input = $( 'input[data-serialize]', $part );
				var $visualInput = $( 'input[type=text]', $part );
				var $select = $( '.happyforms-custom-select-dropdown', $part );

				$visualInput.happyFormsSelect( {
					$input: $input,
					$select: $select,
					searchable: $visualInput.attr('data-searchable'),
					required: self.required,
				} );

				$select.on( 'click', 'li', self.onItemSelect.bind( self ) );
				$visualInput.on( 'input', self.numberInputOnly.bind( self ) );

				this.select = $visualInput;


			} );


			this.initTooltip();
		},

		onItemSelect: function ( e ) {
			e.stopPropagation();

			var $target = $( e.target );
			var $select = $target.parent();
			var $visualInput =  $select.siblings( 'input[type=text]' );
			$visualInput.val( '' );

			if( ! $target.hasClass( 'rank-choice-disable' ) ) {
				var selectedValue = $target.data( 'value' );
				var previousValue = $visualInput.data( 'prev-value' );

				if( selectedValue != previousValue ) {
					$( 'li[data-option-value="' + selectedValue + '"]', this.$ranks ).not( '.happyforms-rank-clear-button' ).not( $target ).addClass( 'rank-choice-disable' );
					$( 'li[data-option-value="' + selectedValue + '"]', this.$ranks ).not( '.happyforms-rank-clear-button' ).not( $target ).removeAttr( 'data-value' );
					$( 'li[data-option-value="' + selectedValue + '"]', this.$ranks ).not( '.happyforms-rank-clear-button' ).not( $target ).removeAttr( 'data-label' );

					$( 'li[data-option-value="' + previousValue + '"]', this.$ranks ).not( '.happyforms-rank-clear-button' ).not( $target ).removeClass( 'rank-choice-disable' );
					$( 'li[data-option-value="' + previousValue + '"]', this.$ranks ).not( '.happyforms-rank-clear-button' ).not( $target ).attr( 'data-value', previousValue );
					$( 'li[data-option-value="' + previousValue + '"]', this.$ranks ).not( '.happyforms-rank-clear-button' ).not( $target ).attr( 'data-label', previousValue );
				}

				if( selectedValue == '' ) {
					$( '.happyforms-rank-clear-button', $select ).addClass( 'hide-clear-button' );
				} else {
					$( '.happyforms-rank-clear-button', $select ).removeClass( 'hide-clear-button' );
				}

				$select.siblings( '[data-serialize]' ).val( selectedValue );
				$visualInput.val( selectedValue );
				$visualInput.data( 'prev-value', selectedValue );
			}

			$select.hide();
		},

		numberInputOnly: function( e ) {
			$input = $( e.target );
			value = $input.val();
			$input.val(  value.replace( /[^0-9]/gu, '' ) );
		},
	};
} ) ( jQuery );