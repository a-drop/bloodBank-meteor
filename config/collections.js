BloodGroups = new Meteor.Collection('bloodGroups');/*Blood Groups*/

Requests = new Meteor.Collection('requests', {
	transform: function(doc) {
		doc.user = Meteor.users.findOne({_id: doc.user});
		doc.blood_group = BloodGroups.findOne({_id: doc.blood_group});
		doc.status = Statuses.findOne({_id: doc.status});
		return doc;
	}
}); /*Requests for Blood*/

Statuses = new Meteor.Collection('statuses'); /*Request Statuses*/
