Template.nav.helpers({
	});


Template.nav.onRendered(function(){
	$('.button-collapse').sideNav();
	$(".dropdown-button").dropdown();
});



Template.nav.events({
	"click .logout": function (event) {
		event.preventDefault();
		Meteor.logout(function() {
			console.log('Logout Success');
		});
	}
});
