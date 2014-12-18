
angular.module('boneApp').controller('MatchCtrl', ['$scope', '$location', '$collection', function($scope, $location, $collection) {

  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId();
  }
  console.log($scope.curUserId);
  var r;

  //$collection(Dogs, {user_id: $scope.curUserId}).bindOne($scope, 'myDog');
  $scope.myDog = Dogs.findOne({user_id: $scope.curUserId});
  console.log($scope.myDog);
  

  $scope.getRandomDog = function() {
    r = Math.random();
    console.log(r);
    $scope.dog = Dogs.findOne({
      randomize: {$lte: r},
      downVotes: {$nin: [$scope.curUserId]},
      _id: {$not: $scope.myDog._id}
    });
    if(!$scope.dog) {
      $scope.dog = Dogs.findOne({
        randomize: {$gt: r},
        downVotes: {$nin: [$scope.curUserId]},
        _id: {$not: $scope.myDog._id}
      });
    }
    console.log($scope.dog);
  };

  $scope.upVote = function() {
    if ($scope.dog) {
      if ($scope.dog.user_id)
      Dogs.update({_id: $scope.dog._id}, {$addToSet: {upVotes: $scope.curUserId}});
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
