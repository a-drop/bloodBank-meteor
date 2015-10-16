Template.allRequestList.helpers({
	allRequests: function() {
		return Requests.find({}, {sort: {"timeStamp.createdAt": -1}});
	},
	createdAt: function () {
		return moment(this.timeStamp.createdAt).fromNow();
	}
});

Template.allRequestList.events({
	"click .req_link": function () {
		Router.go('viewRequest', {_id: this._id});
	}
});

Template.allRequestList.onRendered(function ( ){

});
