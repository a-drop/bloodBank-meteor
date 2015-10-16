
allRequestList = new Meteor.Pagination(Requests, {
	perPage: 3,
  sort: { "timeStamp.createdAt": -1 },
  templateName: "landing",
	table:{
    class: "table requestList-table highlight",
    fields: ['user_name', "blood_group_title", "status_title"],
		header: _.map(["Name", "Blood Group", "Status"], function(f) {
		  return f[0].toUpperCase() + f.slice(1);
	  }),
    wrapper: "table-wrapper"
	}
});

myRequestList = new Meteor.Pagination(Requests, {
	perPage: 3,
  sort: { "timeStamp.createdAt": -1 },
  templateName: "myRequests",
	itemTemplate: "myRequestPagination",
	table:{
    class: "table requestList-table highlight",
    fields: ["blood_group_title", "status_title"],
		header: _.map(["Name", "Blood Group", "Status"], function(f) {
		  return f[0].toUpperCase() + f.slice(1);
	  }),
    wrapper: "table-wrapper"
	}
});
