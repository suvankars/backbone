var app = app || {};

app.Library = Backbone.View.extend({
	el: #books,

	initialize: function( initialBooks ){
		this.render();
		this.collection = new app.Library( initialBooks );
		this.render();
	}

		render: function(){
			this.collection.each( function( item) {
				this.renderBook( item );
			}, this )
		};

		renderBook: function( item ){
			var bookView = app.BookView({
				model: item
			})	
		}

});