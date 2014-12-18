'use strict';
angular.module("boneApp").controller("DogProfileCtrl", ['$scope','$collection', '$location', function($scope, $collection, $location){
  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId;
  }
  $scope.errors = [];
  $scope.dogs = Dogs.findOne({user_id: Meteor.userId()});
  //$collection(Dogs, {user_id: Meteor.userId()}).bind($scope, 'dogs', true, true);
  //$scope.selfie = dogs.url;
console.log($scope.dogs);
  if(!$scope.dogs){
    $scope.dogs= {};
    $scope.dogs.name = "";
    $scope.dogs.age = null;
    $scope.dogs.breed = "";
    $scope.dogs.sex = "";
    $scope.dogs.bio = "Click here to add description";
    $scope.dogs.url = "";
    console.log($scope.dogs);
    $scope.viewChoice = 'petEdit';
  } else {$scope.viewChoice = 'petProfile';}

$scope.petEdit = function() {
  $scope.viewChoice = 'petEdit';
};

$scope.petPhoto = function() {
  $scope.viewChoice = 'petPhoto';
};

$scope.petBio = function() {
  $scope.tempBio =$scope.dogs.bio;
  $scope.dogs.bio = "";
  $scope.viewChoice = 'petDescription';
};

$scope.dogData = function() {
  $scope.errors = [];
  if (!$scope.dogs.sex) $scope.errors.push('Choose a sex');
  if (!$scope.dogs.age) $scope.errors.push('Invalid age');
  if (!$scope.dogs.breed) $scope.errors.push('Add a breed');
  if (!$scope.dogs.name) $scope.errors.push('Add a name');
  if ($scope.errors.length) {
    console.log($scope.errors);
    return;
  }
  console.log('post error check');
  Dogs.insert({name: $scope.dogs.name,
    age: $scope.dogs.age,
    sex: $scope.dogs.sex,
    breed: $scope.dogs.breed,
    user_id: Meteor.userId(),
    bio: $scope.dogs.bio,
    url: $scope.dogs.url,
    randomize: Math.random(),
    upVotes: [],
    downVotes: [],
    matches: []
  });
  $scope.dogs = Dogs.findOne({user_id: Meteor.userId()});
  $scope.viewChoice = 'petProfile';
};

  $scope.description = function() {
    Dogs.update({_id: $scope.dogs._id}, {bio: $scope.dogs.bio});
    $scope.viewChoice = 'petProfile';
  };

  $scope.photoUpload = function() {
        //var self = this;
        var files = $("input.btn-pic-upload")[0].files;
        C.upload_stream(files,function(res){
          console.log(res.secure_url);
          $scope.dogs.url = res.secure_url;
          console.log($scope.dogs._id, $scope.dogs.url);
          Dogs.update({'_id': $scope.dogs._id}, { $set: {'url': res.secure_url}}, function(err, res) {console.log(err, res);});
        });
    };
}]);
