'use strict';
Meteor.publish('dogProfiles', function() {
  if (!this.userId) return null;
  return Dogs.find({});
});

Meteor.publish('randomDogProfile', function(uid, myDogId) {
  var randNum = Math.random();
  randomDog = Dogs.find({
    randomize: {$lte: randNum},
    downVotes: {$nin: [uid]},
    _id: {$not: myDogId}
  },
  {
    limit: 1
  });
  if (!randomDog) {
    randomDog = Dogs.find({
      randomize: {$gt: randNum},
      downVotes: {$nin: [uid]},
      _id: {$not: myDogId}
    },
    {
      limit: 1
    });
  }
  return randomDog;
})

Meteor.publish('randomDog2d', function(uid, myDogId) {
  return find({
    random_point: {$near: [Math.random(), Math.random()]},
    downVotes: {$nin: [uid]},
    _id: {$not: myDogId}
  },
  {
    limit: 1
  });
});

Meteor.publish('myDogProfile', function(uid) {
  return Dogs.find({user_id: uid});
})