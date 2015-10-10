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
Template.ApplicationLayout.onRendered(function(){
	$('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100,
    min: new Date(1915,1,1),
    max: new Date()
  });
  jQuery.validator.setDefaults({
      errorElement: 'div',
      errorClass: 'validation-error invalid',
  });
});
