
allRequestList = new Meteor.Pagination(Requests, {
	perPage: 3,
  sort: { "timeStamp.createdAt": -1 },
  templateName: "landing",
	itemTemplate: "allRequestPagination",
	divWrapper: false
});

myRequestList = new Meteor.Pagination(Requests, {
	perPage: 2,
  sort: { "timeStamp.createdAt": -1 },
  templateName: "myRequests",
	itemTemplate: "myRequestPagination",
	divWrapper: false
	// auth: function(skip, sub) {
	// 	console.log(skip);
	// 	var currrentUser = sub.userId;
	// 	if (!currrentUser) { return false; }
	// 	return this.Collection.find({user: currrentUser});
	// },

});
