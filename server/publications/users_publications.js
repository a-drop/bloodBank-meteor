Meteor.publish("thisUser", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                              {fields: {
																'services.google.gender': 1,
																'services.google.email': 1,
																'services.google.picture': 1,
																'services.google.given_name': 1,
																'services.google.family_name': 1,

																'services.facebook.gender': 1,
																'services.facebook.email': 1,
																'services.facebook.id': 1,
																'services.facebook.first_name': 1,
																'services.facebook.last_name': 1,
                                'profile': 1,
                                'completeRegistration': 1,

															}});
  } else {
    this.ready();
  }
});
Meteor.publish("allUser", function () {
  return Meteor.users.find({}, {
    fields: {
      'profile': 1,
      'completeRegistration': 1,
    }
  });
});
