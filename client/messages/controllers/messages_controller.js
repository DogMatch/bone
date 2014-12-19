'use strict';
angular.module('boneApp').controller('MessagesCtrl', ['$scope', '$location', function($scope, $location) {
  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId();
  }
  $scope.matchedDogs = Dogs.find({matches: $scope.curUserId}).fetch();

  $scope.delete = function() {
    Dogs.update({_id: $scope.myDog._id}, {$unset: {matches: $scope.dog.user_id}});
  };
}]);
