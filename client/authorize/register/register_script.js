Template.register.helpers({
  currentUserData: function () {
    var currentUser = Meteor.user();
    if (currentUser.services.google) {
      if(currentUser.services.google.email) {
        var emailDisabled = 'disabled';
      }
      return {
        first_name: currentUser.services.google.given_name,
        last_name: currentUser.services.google.family_name,
        gender: currentUser.services.google.gender,
        email: currentUser.services.google.email,
        picture: currentUser.services.google.picture,
        email_disabled: emailDisabled
      };
    }
    if (currentUser.services.facebook) {
      if(currentUser.services.facebook.email) {
        var emailDisabled = 'disabled';
      }
      return {
        first_name: currentUser.services.facebook.first_name,
        last_name: currentUser.services.facebook.last_name,
        gender: currentUser.services.facebook.gender,
        email: currentUser.services.facebook.email,
        picture: 'https://graph.facebook.com/'+currentUser.services.facebook.id+'/picture?type=large',
        email_disabled: emailDisabled
      };
    }
  },

});

Template.register.events({
/*  "submit #register-form": function (event, template) {
    event.preventDefault();
    alert('form submit');
  }*/
});

Template.register.onCreated(function(){
});

Template.register.onRendered(function(){
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100,
    min: new Date(1915,1,1),
    max: new Date()
  });
  $.validator.setDefaults({
      errorElement: 'div',
      errorClass: 'validation-error invalid',
  });

  $('#register-form').validate({
    submitHandler: function (event) {
      var first_name = $('[name=first_name]').val();
      var last_name = $('[name=last_name]').val();
      var contact_no = $('[name=contact_no]').val();
      var email = $('[name=email]').val();
      var blood_group = $('[name=blood_group]').val();
      var dob = $('[name=dob]').val();
      var gender = $('[name=gender]').val();
      var formatted_address = $('[name=formatted_address]').val();
      var geometry = $('[name=geometry]').val();

      var userData = {
        first_name: first_name,
        last_name: last_name,
        contact_no: contact_no,
        email: email,
        blood_group: blood_group,
        dob: dob,
        gender: gender,
        formatted_address: formatted_address,
        geometry: geometry,
        name: first_name+' '+last_name
      }
      Meteor.call("completeRegistration", userData, function(error, result){
        if(error){
          console.log("error", error);
        } else {
          Router.go('home');
        }
        if(result){

        }
      });
    }
  });
});

Template.register.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});
