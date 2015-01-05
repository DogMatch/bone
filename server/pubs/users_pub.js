'use strict';
Meteor.publish('myUserData', function() {
  if (!this.userId) return null;
  return Meteor.users.find({_id: this.userId});
});
