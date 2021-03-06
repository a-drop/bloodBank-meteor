Router.onBeforeAction("loading");
Router.route('/', {
  template: 'home',
  name: 'home'

});
// Router.route('/landing', {
//   template: 'landing',
//   name: 'landing',
//   layoutTemplate: ''
//
// });
/*Authorizations*/
Router.route('/login', {
  name: 'login',
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
Router.route("myDonations", {

});
Router.route("about", {});
Router.route("myRequests", {
  name: "myRequests"
});
Router.route("/request/:_id", {
  name:"viewRequest",
  template:"viewRequest",
  data: function () {
    var request = this.params._id;
    //console.log(Requests.findOne({_id: request}));
    return Requests.findOne({_id: request});
  }
});
