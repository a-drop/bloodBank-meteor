/*Declare bloodgroup collection*/
BloodGroups = new Meteor.Collection('bloodGroups');

/*Seed blood group collection with some sample data*/

Meteor.startup(function(){
		if(BloodGroups.find().count() == 0){
			BloodGroups.insert({title: 'A+'});
			BloodGroups.insert({title: 'A-'});
			BloodGroups.insert({title: 'B+'});
			BloodGroups.insert({title: 'B-'});
			BloodGroups.insert({title: 'AB+'});
			BloodGroups.insert({title: 'AB-'});
			BloodGroups.insert({title: 'O+'});
			BloodGroups.insert({title: 'O-'});
		}
});
