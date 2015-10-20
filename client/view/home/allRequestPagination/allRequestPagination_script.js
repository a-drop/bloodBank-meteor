Template.allRequestPagination.helpers({
	createdAt: function () {
		return moment(this.timeStamp.createdAt).fromNow();
	}
});

Template.allRequestPagination.events({
	"click .req_link": function () {
		Router.go('viewRequest', {_id: this._id});
	}
});

Template.allRequestPagination.onRendered(function ( ){
	self = this;
	/*this.autorun(function(){
		self.$('.createdAt').val(moment(self.timeStamp.createdAt).fromNow());
	});*/
});
