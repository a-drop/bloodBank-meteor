BloodGroups = new Meteor.Collection('bloodGroups');/*Blood Groups*/

Requests = new Meteor.Collection('requests', {
	transform: function(doc) {
		doc.user = Meteor.users.findOne({_id: doc.userId});
		doc.bloodGroup = BloodGroups.findOne({_id: doc.bloodGroup});
		doc.status = BloodGroups.findOne({_id: doc.status});
		return doc;
	}
}); /*Requests for Blood*/

Statuses = new Meteor.Collection('statuses'); /*Request Statuses*/
