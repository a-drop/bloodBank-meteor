Router.route('/', {
  template: 'landing',
  name: 'home'

});

/*Authorizations*/
Router.route('/login', {
  layoutTemplate: ''
});
Router.route('/register', {
  onBeforeAction: function() {
    var currentUser = Meteor.user();
    if (currentUser.completeRegistration) {
      Router.go('home');
    } else {
      this.next();
    }

  },
  layoutTemplate: ''
});
Router.route("makeRequest", {

});
Router.route("about", {});
Router.route("myRequests", {});
