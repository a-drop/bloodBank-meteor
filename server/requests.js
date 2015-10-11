
Meteor.publish("requests", function(){
	return Requests.find();
});

Meteor.methods({
	donationRequest:function(data){
		if(currentUser = Meteor.userId()){
			var requestData = {
				user: currentUser,
				blood_group: data.blood_group,
				contact_no:data.contact_no,
				message: data.message,
				address: data.formatted_address,
				geometry: data.geometry,
				status: Statuses.findOne({title: 'waiting'})._id,
				timeStamp: {
					createdAt: new Date()
				}
			};
			Requests.insert(requestData);
		} else {
			console.log('Your not logged in, please login to request a donation');
		}

	}
});
