Meteor.methods({
  completeRegistration: function(userData){
    var currentUser = Meteor.user();
    if(currentUser.services.facebook && currentUser.services.facebook.email){
      userData.email = currentUser.services.facebook.email;
    }
    if(currentUser.services.google && currentUser.services.google.email){
      userData.email = currentUser.services.google.email;
    }

    Meteor.users.update({_id:currentUser._id}, {$set:{
      profile: userData,
      completeRegistration: true,
      timestamp: {
        createdAt: new Date()
      }
    }});
  }
});
