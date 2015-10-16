
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
				geometry: {
					lat: data.geometry.lat,
					lng: data.geometry.lng
				},
				status: Statuses.findOne({title: 'waiting'})._id,
				timeStamp: {
					createdAt: new Date()
				}
			};
			Requests.insert(requestData);
		} else {
			console.log('Your not logged in, please login to request a donation');
		}
	},
	agreeToDonate: function (id) {
		if(currentUser = Meteor.userId()){
			Requests.update({_id: id}, {$push: {doner_request: {id: id, createdAt: new Timestamp()}}});
		} else {
			console.log('Your not logged in, please login to request a donation');
		}
	}
});
