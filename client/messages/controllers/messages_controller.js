'use strict';
angular.module('boneApp').controller('MessagesCtrl', ['$scope', '$location', function($scope, $location) {
  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId();
  }
  console.log($scope.curUserId);
  $scope.matchedDogs = Dogs.find({matches: $scope.curUserId}).fetch();
  console.log($scope.matchedDogs);
}]);