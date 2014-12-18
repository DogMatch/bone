'use strict';
angular.module('boneApp').controller('MatchCtrl', ['$scope', '$location', function($scope, $location) {

  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId;
  }
  
  var r;

  $scope.myDogId = Dogs.find({user_id: $scope.curUserId}, {_id: 1});

  $scope.getRandomDog = function() {
    r = Math.random();
    console.log(r);
    $scope.dog = Dogs.findOne({
      randomize: {$lte: r},
      downVotes: {$nin: [$scope.curUserId]},
      _id: {$not: $scope.myDogId}
    });
    if(!$scope.dog) {
      $scope.dog = Dogs.findOne({
        randomize: {$gt: r},
        downVotes: {$nin: [$scope.curUserId]},
        _id: {$not: $scope.myDogId}
      });
    }
    console.log($scope.dog);
  };

  $scope.upVote = function() {
    if ($scope.dog) {
      Dogs.update({
        _id: $scope.dog._id}, {$addToSet: {upVotes: $scope.curUserId}});
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
