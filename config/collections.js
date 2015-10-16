BloodGroups = new Meteor.Collection('bloodGroups');/*Blood Groups*/

Requests = new Meteor.Collection('requests', {
	transform: function(doc) {
		doc.user_name = Meteor.users.findOne({_id: doc.user}).profile.name;
		doc.blood_group_title = BloodGroups.findOne({_id: doc.blood_group}).title;
		doc.status_title = Statuses.findOne({_id: doc.status}).title;
		return doc;
	}
}); /*Requests for Blood*/

Statuses = new Meteor.Collection('statuses'); /*Request Statuses*/
