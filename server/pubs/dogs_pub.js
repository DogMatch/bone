'use strict';
Meteor.publish('dogProfiles', function() {
  if (!this.userId) return null;
  return Dogs.find({
    downVotes: {$nin: [this.userId]},
    upVotes: {$nin: [this.userId]}
  });
});

Meteor.publish('myDogProfile', function() {
  return Dogs.find({user_id: this.userId});
});
