
Template.login.helpers({

});

Template.login.events({
  "click #fblogin": function(event, template){
    event.preventDefault();
    Meteor.loginWithFacebook(function(err){
      if (err) {
        console.log('Fb Login Fails');
      } else {
        console.log(' Facebook Login Success');
        Router.go('home');
      }
    });

  },
  "click #googlelogin": function(event, template){
    event.preventDefault();
    Meteor.loginWithGoogle(function(err){
      if (err) {
        console.log('Google Login Fails');
      } else {
        console.log('Google Login Success');
        var currentUser = Meteor.user();
        if(currentUser.registered) {
          Router.go('home');
        } else {
          Router.go('register');
        }
      }
    });
  }
});
