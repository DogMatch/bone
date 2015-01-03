'use strict';
angular.module('boneApp').controller('MatchCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  if (!Meteor.userId()) $location.path('/');

  $scope.errors = [];
  $scope.myDog = Dogs.findOne({user_id: Meteor.userId()});

  Meteor.subscribe('dogProfiles')
  $scope.getRandomDog = function() {
    var randNum = Math.random();
    console.log(randNum);
    $scope.dog = Dogs.findOne({
      randomize: {$lte: randNum},
      downVotes: {$nin: [$scope.curUserId]},
      _id: {$not: $scope.myDog._id}
    });
    if (!$scope.dog) {
      console.log('GT');
      $scope.dog = Dogs.findOne({
        randomize: {$gt: randNum},
        downVotes: {$nin: [$scope.curUserId]},
        _id: {$not: $scope.myDog._id}
      });
    }
    console.log($scope.dog);
  };

  $scope.upVote = function() {
    if ($scope.dog) {
      Dogs.update({_id: $scope.dog._id}, {$addToSet: {upVotes: $scope.myDog.user_id}});
      console.log((_.indexOf($scope.myDog.upVotes, $scope.dog.user_id)));
      if (_.indexOf($scope.myDog.upVotes, $scope.dog.user_id) > -1) {
        console.log('Match!!!!!');
        Dogs.update({_id: $scope.dog._id}, {$addToSet: {matches: $scope.myDog.user_id}});
        Dogs.update({_id: $scope.myDog._id}, {$addToSet: {matches: $scope.dog.user_id}});
      }
    }
    $scope.getRandomDog();
  };

  $scope.downVote = function() {
    if ($scope.dog) {
      Dogs.update({_id: $scope.dog._id}, {$addToSet: {downVotes: $scope.curUserId}});
    }
    $scope.getRandomDog();
  };

  $scope.getMoreInfo = function() {
    $scope.showInfo = !$scope.showInfo;
  };

  $scope.getRandomDog();

}]);
