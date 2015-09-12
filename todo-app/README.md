# backbone
It is a bssic To-do list, which is basically un-ordered list of elements with checkboxes.


#Backbone.Model

Models are heart of backbone application, It contains data and logic to process the data, such as validation, conversition, initialiazation etc.

#BackBone.collection 

Backbone collection is a ordered set of backbone models. It can listen for any event in tha collection and feach data from data base or API.

#Backbone.View

There are 4 basic property of Back BackBone view:  el, initialize, render,	events.
el: property reference the dom object created in the browser 

view.el: Every view needs to reference a DOM at all times. Therefore, the view will inject content into this element. This is the el property. this.el is created from view’s el,tagName, className, id or attributes properties

initialize:
Here you have the option to pass parameters that will be attached to a model, collection or view.el

render:
This function inject markup into DOM element.  
events:


