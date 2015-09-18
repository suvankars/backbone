var app = app || {};

app.View = Backbone.view.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _template($('bookTemplate').html() ),

	render: function(){
		//this.el is what we defined in tagName
		this.$el.html( this.template( this.model.attributes ) )
	}
});