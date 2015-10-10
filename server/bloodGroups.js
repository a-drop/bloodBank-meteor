
/*Seed blood group collection with some sample data*/

Meteor.publish("bloodGroups", function(){
	return BloodGroups.find();
});
