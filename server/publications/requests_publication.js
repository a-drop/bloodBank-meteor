
Meteor.publish("allRequests", function(){
	return Requests.find({fields: {	doner_request: 0 }});
});


Meteor.publish("myRequests", function(){
	var currrentUser = this.userId;
	if (currrentUser) {
		return Requests.find({user: currrentUser});
	} else {
		return [];
	}
});

Meteor.publish('paginatedRequests', function(limit) {
  return Requests.find({}, { limit: limit }, {fields: {	doner_request: 0 }});
});
