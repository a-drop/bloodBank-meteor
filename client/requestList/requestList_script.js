Template.requestList.helpers({
	allRequests: function() {
		return Requests.find();
	}
});

Template.requestList.events({
	"click .req_link": function () {
		Router.go('viewRequest', {_id: this._id});
	}
});

Template.requestList.onRendered(function ( ){

})
