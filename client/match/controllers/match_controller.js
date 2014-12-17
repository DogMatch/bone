angular.module('boneApp').controller('MatchCtrl', ['$scope', '$collection', function($scope, $collection) {

  var curUserId = Meteor.userId()
  var r

  //$collection(Dogs).bindOne($scope, 'myDog', {user_id: curUserId});
  $scope.myDogId = Dogs.find({user_id: curUserId}, {_id: 1});
  
  $scope.getRandomImg = function() {
    r = Math.random();
    console.log(r);
    //$scope.dog = $collection(Dogs).bindOne($scope, 'dog', {randomize:{$lte:r}});
    $scope.dog = Dogs.findOne({randomize: {$lt: r}, _id: {$not: $scope.myDogId}});
    console.log($scope.dog)
  };

  $scope.upVote = function() {
    
    $scope.getRandomImg();
  };

  $scope.downVote = function() {
    
    $scope.getRandomImg();
  };

  $scope.getMoreInfo = function() {
    $scope.showInfo = !$scope.showInfo;
  };

  $scope.getRandomImg();

}]);
