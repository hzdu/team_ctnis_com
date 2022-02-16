( function( $, settings ) {

	$( function() {
		var $option = $( '<option value="happyforms">' + settings.label + '</option>' );

		$( '#attachment-filter' ).children().last().before( $option );

		if ( settings.selected ) {
			$option.prop( 'selected', true );
		}
	} );

} )( jQuery, _happyFormsAdminMediaSettings );