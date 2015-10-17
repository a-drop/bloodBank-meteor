Template.allRequestPagination.helpers({
	createdAt: function () {
		console.log(this);
		return moment(this.timeStamp.createdAt).fromNow();
	}
});

Template.allRequestPagination.events({
	"click .req_link": function () {
		Router.go('viewRequest', {_id: this._id});
	}
});

Template.allRequestPagination.onRendered(function ( ){

});
