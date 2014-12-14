Meteor.publish("dogProfiles", function () {
  if(!this.userId) return null;
  return Dogs.find();
});
