Meteor.publish("allUserData", function () {
  if(!this.userId) return null;
  return Meteor.users.find({}, {fields: {
    '_id': true,
    'emails': true,
    'profile': true,
  }});
});
