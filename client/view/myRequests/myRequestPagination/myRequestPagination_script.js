Template.myRequestPagination.helpers({
	createdAt: function () {
		return moment(this.timeStamp.createdAt).fromNow();
	}
});

Template.myRequestPagination.events({
	"click .req_link": function () {
		Router.go('viewRequest', {_id: this._id});
	}
});

Template.myRequestPagination.onRendered(function ( ){
	})
