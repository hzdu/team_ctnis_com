( function( $, settings ) {

	var All = wp.media.view.AttachmentFilters.All;
	var Uploaded = wp.media.view.AttachmentFilters.Uploaded;
	var AttachmentsBrowser = wp.media.view.AttachmentsBrowser;

	var FiltersExtension = {
		createFilters: function() {
			All.prototype.createFilters.apply( this, arguments );

			var mine = this.filters.mine ? this.filters.mine : null;

			if ( mine ) {
				delete this.filters.mine;
			}

			this.filters.happyforms = {
				text: settings.label,
				props: {
					type: 'happyforms',
				},
				priority: 50,
			};

			if ( mine ) {
				this.filters.mine = mine;
			}
		},
	};

	wp.media.view.AttachmentFilters.All = All.extend( FiltersExtension );
	wp.media.view.AttachmentFilters.Uploaded = Uploaded.extend( FiltersExtension );

	wp.media.view.AttachmentsBrowser = AttachmentsBrowser.extend( {
		createToolbar: function() {
			AttachmentsBrowser.prototype.createToolbar.apply( this, arguments );

			var Filters = wp.media.view.AttachmentFilters.All;

			if ( 'uploaded' === this.options.filters ) {
				Filters = wp.media.view.AttachmentFilters.Uploaded;
			}

			var filters = new Filters( {
				controller: this.controller,
				model: this.collection.props,
				priority: -80
			} );

			this.toolbar.set( 'filters', filters.render() );
		}
	} );

} )( jQuery, _happyFormsAdminMediaSettings );