'use strict';
angular.module('boneApp').controller('MessagesCtrl', ['$scope', '$location', function($scope, $location) {
  if (!Meteor.userId()) $location.path('/');

  $scope.errors = [];
  Meteor.subscribe('matchedDogProfiles');
  Tracker.autorun(function(self) {
    $scope.matchedDogs = Dogs.find({}).fetch();
    if (!$scope.$root.$$phase) $scope.$apply();
    $scope.$on('$destroy', function () {
      self.stop(); // Stop computation if scope is destroyed.
    });
  });

  $scope.deleteMatch = function(id) {
    Dogs.update({_id: id}, {$unset: {matches: Meteor.userId()}});
  };
}]);
