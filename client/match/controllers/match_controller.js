'use strict';
angular.module('boneApp').controller('MatchCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  if (!Meteor.userId()) $location.path('/');

  $scope.errors = [];
  Tracker.autorun(function(self) {
    $scope.myDog = Dogs.findOne({user_id: Meteor.userId()});
    if (!$scope.$root.$$phase) $scope.$apply();
    $scope.$on('$destroy', function() {
      self.stop(); // Stop computation if scope is destroyed.
    });
  });

  var sub = Meteor.subscribe('dogProfiles');
  Tracker.autorun(function(self) {
    var randNum = Math.random();
    $scope.dog = Dogs.findOne({
      randomize: {$lte: randNum},
      user_id: {$ne: Meteor.userId()}
    });
    if (!$scope.dog) {
      $scope.dog = Dogs.findOne({
        randomize: {$gte: randNum},
        user_id: {$ne: Meteor.userId()}
      });
    }
    if (!$scope.$root.$$phase) $scope.$apply();
    $scope.$on('$destroy', function() {
      self.stop(); // Stop computation if scope is destroyed.
      sub.stop();
    });
  });

  $scope.upVote = function() {
    if ($scope.dog) {
      Dogs.update({_id: $scope.dog._id}, {$addToSet: {upVotes: Meteor.userId()}});
      console.log((Dogs.find().count() - 1), ' dogs left');
      if (_.indexOf($scope.myDog.upVotes, $scope.dog.user_id) > -1) {
        console.log('Match!!!!!');
        Dogs.update({_id: $scope.dog._id}, {$addToSet: {matches: $scope.myDog.user_id}});
        Dogs.update({_id: $scope.myDog._id}, {$addToSet: {matches: $scope.dog.user_id}});
      }
    }
  };

  $scope.downVote = function() {
    if ($scope.dog) {
      Dogs.update({_id: $scope.dog._id}, {$addToSet: {downVotes: Meteor.userId()}});
      console.log((Dogs.find().count() - 1), ' dogs left');
    }
  };

  $scope.getMoreInfo = function() {
    $scope.showInfo = !$scope.showInfo;
  };
}]);
