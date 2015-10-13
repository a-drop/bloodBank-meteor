Template.ApplicationLayout.helpers({
	create: function(){

	},
	rendered: function(){

	},
	destroyed: function(){

	},
});

Template.ApplicationLayout.events({
	"click #foo": function(event, template){

	}
});
Template.ApplicationLayout.onCreated(function () {
	$.validator.setDefaults({
			errorElement: 'div',
			errorClass: 'validation-error invalid',
	});
})
Template.ApplicationLayout.onRendered(function(){
	document.title = 'Project Red APP';

});
