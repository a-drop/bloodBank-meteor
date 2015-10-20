Meteor.startup(function(){
	BloodGroups.remove({});
	if(BloodGroups.find().count() == 0){
		BloodGroups.insert({_id: '1', title: 'A+'});
		BloodGroups.insert({_id: '2', title: 'A-'});
		BloodGroups.insert({_id: '3', title: 'B+'});
		BloodGroups.insert({_id: '4', title: 'B-'});
		BloodGroups.insert({_id: '5', title: 'AB+'});
		BloodGroups.insert({_id: '6', title: 'AB-'});
		BloodGroups.insert({_id: '7', title: 'O+'});
		BloodGroups.insert({_id: '8', title: 'O-'});
	}
});
