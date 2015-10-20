Template.nav.helpers({
	});


Template.nav.onRendered(function(){
	self = this;
	this.autorun(function(){
		if(Meteor.userId()) {
		 	self.$(".dropdown-button").dropdown();
		}
		self.$('.button-collapse').sideNav();
	});
});



Template.nav.events({
	"click .logout": function (event) {
		event.preventDefault();
		Meteor.logout(function() {
			console.log('Logout Success');
		});
	}
});
