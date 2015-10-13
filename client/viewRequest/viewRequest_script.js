Template.viewRequest.helpers({
	loadMap: function () {
		// staticMap(this.geometry.lat, this.geometry.lng);
	}
});

Template.viewRequest.events({
	"click #i-agree-to-share": function () {
		console.log('Clicked on agree');
		Meteor.call("agreeToDonate", this._id, function(error, result){
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

Template.viewRequest.onRendered(function ( ){
	$('.modal-trigger').leanModal();

});
Template.viewRequest.onCreated(function ( ){

});
