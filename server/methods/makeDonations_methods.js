Meteor.methods({
	makeDonation: function (id) {
		if(currentUser = Meteor.userId()){
			var req = Requests.findOne({_id: id});
			if (req.user._id == currentUser) {
				console.log('Sorry You cant donate to your own request');
				return false;
			}
			var donerExist;
			if (req.doner_request) {
				req.doner_request.forEach(function (doner) {
					if(doner._id == currentUser){
						donerExist = true;
					}
				});
				if(donerExist){
					console.log('You already sent a request, Thank you');
					return false;
				}
			}
			Requests.update({_id: id}, {$push: {doner_request: {userId: currentUser , createdAt: new Date()}}})
		} else {
			console.log('Your not logged in, please login to request a donation');
		}
	}
});
