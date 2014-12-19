'use strict';
angular.module('boneApp').controller('MessagesCtrl', ['$scope', '$location', function($scope, $location) {
  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId();
  }
  
  $scope.getMatchedDogs = function() {
    $scope.matchedDogs = Dogs.find({matches: $scope.curUserId}).fetch();
  };

  $scope.deleteMatch = function(id) {
    Dogs.update({_id: id}, {$unset: {matches: $scope.curUserId}});
    console.log('unset: ' + id)
    $scope.getMatchedDogs();
  };
  
  $scope.getMatchedDogs();
}]);
