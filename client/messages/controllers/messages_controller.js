'use strict';
angular.module('boneApp').controller('MessagesCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  if (!Meteor.userId()) $location.path('/');

  $scope.errors = [];
  var sub = Meteor.subscribe('matchedDogProfiles');
  Tracker.autorun(function(self) {
    $scope.matchedDogs = Dogs.find({user_id: {$ne: Meteor.userId()}}).fetch();
    if (!$scope.$root.$$phase) $scope.$apply();
    $scope.$on('$destroy', function() {
      self.stop(); // Stop computation if scope is destroyed.
      sub.stop();
    });
  });

  $scope.deleteMatch = function(id) {
    Dogs.update({_id: id}, {$unset: {matches: Meteor.userId()}});
  };
}]);
