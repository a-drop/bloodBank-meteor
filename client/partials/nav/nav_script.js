Template.nav.helpers({
	});

Template.nav.events({
	"click .logout": function (event) {
		event.preventDefault();
		Meteor.logout(function() {
			console.log('Logout Success');
		});
	}
});
