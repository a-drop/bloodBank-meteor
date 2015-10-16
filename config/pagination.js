
allRequestList = new Meteor.Pagination(Requests, {
	perPage: 3,
  sort: { "timeStamp.createdAt": -1 },
  templateName: "landing",
	itemTemplate: "allRequestPagination"
});

myRequestList = new Meteor.Pagination(Requests, {
	perPage: 3,
  sort: { "timeStamp.createdAt": -1 },
  templateName: "myRequests",
	itemTemplate: "myRequestPagination"
});
