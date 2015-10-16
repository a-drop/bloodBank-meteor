Template.myRequestList.helpers({
	allRequests: function() {
		return Requests.find({'user': Meteor.userId()}, {sort: {"timeStamp.createdAt": -1}});
	},
	createdAt: function () {
		return moment(this.timeStamp.createdAt).fromNow();
	}
});

Template.myRequestList.events({
	"click .req_link": function () {
		Router.go('viewRequest', {_id: this._id});
	},
	"click .del_req": function() {
		$('#delete-conf').openModal();
		var id = this._id;
		//alert('Ar yu sur wand 2 delet '+id)
		//$('#delete-conf .yes').click(function(){
			//$('#delete-conf').closeModal();
			//alert('Ar yu sur wand 2 delet '+id)

			//return false;
		//});
		$('#delete-conf .no').click(function(){
			return false;
		});
		/*Meteor.call("meteorMethod", dataObject, function(error, result){
			if(error){
				console.log("error", error);
			}
			if(result){

			}
		});*/
	}
});

Template.myRequestList.onRendered(function ( ){

})
