'use strict';
Meteor.publish('allUserData', function() {
  if (!this.userId) return null;
  return Meteor.users.find({}, {fields: {
    _id: true
  }});
});

Meteor.publish('myUserData', function() {
  if (!this.userId) return null;
  return Meteor.users.find({_id: this.userId});
});
