// counter starts at 0

Template.landing.helpers({

});
Template.landing.events({
	"click .requestList-table tbody tr": function () {
		console.log(this._id);
	}
});
