Meteor.startup(function(){
	if(Statuses.find().count() == 0) {
		Statuses.insert({title: 'waiting'});
		Statuses.insert({title: 'complete'});
		Statuses.insert({title: 'more'});
		Statuses.insert({title: 'emergency'});
	}
});
