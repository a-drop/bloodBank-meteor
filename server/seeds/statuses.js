Meteor.startup(function(){
	Requests.remove({});
	if(Statuses.find().count() == 0) {
		Statuses.insert({_id:'1', title: 'pending'});
		Statuses.insert({_id:'2', title: 'complete'});
		Statuses.insert({_id:'3', title: 'more'});
		Statuses.insert({_id:'4', title: 'emergency'});
	}
});
