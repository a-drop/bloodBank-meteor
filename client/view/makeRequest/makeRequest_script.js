Template.makeRequest.helpers({
	});

Template.makeRequest.events({
	});

Template.makeRequest.onRendered(function ( ){
	initMap();
	$('select').material_select();
	$('#request-donation').validate({
		submitHandler: function (event) {
			var requestData = {
				contact_no: $('[name=contact_no]').val(),
				message:  $('[name=request_msg]').val(),
				blood_group: $('[name=blood_group]').val(),
				formatted_address: $('[name=formatted_address]').val(),
				geometry: {
          lat: $('[name=geometry-lat]').val(),
          lng: $('[name=geometry-lng]').val()
        }
			};
			Meteor.call("donationRequest", requestData, function(error, result){
				if(error){
					console.log("error", error);
				} else {
					Router.go('home');
				}
				if(result){

				}
			});
		}
	});
})
