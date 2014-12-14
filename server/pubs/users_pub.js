Meteor.publish("allUserData", function () {
  if(!this.userId) return null;
  return Meteor.users.find({}, {fields: {
    '_id': true,
    'emails': true,
    'profile': true,
  }});
});

Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile ? options.profile : {};
  user.profile.zip = '';
  user.profile.current_location = null;
  user.profile.myDogs = [];
  return user;
});
