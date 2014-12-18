'use strict';
angular.module("boneApp").controller("DogProfileCtrl", ['$scope','$collection', '$location', function($scope, $collection, $location){
  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId;
  }
  $scope.errors = [];
  $scope.mydog = Dogs.findOne({user_id: Meteor.userId()});

console.log($scope.mydog);
  if(!$scope.mydog){
    $scope.mydog= {};
    $scope.mydog.name = "";
    $scope.mydog.age = null;
    $scope.mydog.breed = "";
    $scope.mydog.sex = "";
    $scope.mydog.bio = "Click here to add description";
    $scope.mydog.url = "";
    $scope.viewChoice = 'petProfile';
  } else {$scope.viewChoice = 'petProfile';}

$scope.petEdit = function() {
  $scope.viewChoice = 'petEdit';
};

$scope.petPhoto = function() {
  $scope.viewChoice = 'petPhoto';
};

$scope.petBio = function() {
  $scope.tempBio =$scope.mydog.bio;
  $scope.mydog.bio = "";
  $scope.viewChoice = 'petDescription';
};

$scope.dogData = function() {
  $scope.errors = [];
  if (!$scope.mydog.sex) $scope.errors.push('Choose a sex');
  if (!$scope.mydog.age) $scope.errors.push('Invalid age');
  if (!$scope.mydog.breed) $scope.errors.push('Add a breed');
  if (!$scope.mydog.name) $scope.errors.push('Add a name');
  if ($scope.errors.length) {
    console.log($scope.errors);
    return;
  }
  console.log('post error check');

  Dogs.insert({name: $scope.mydog.name,
      age: $scope.mydog.age,
      sex: $scope.mydog.sex,
      breed: $scope.mydog.breed,
      user_id: Meteor.userId(),
      bio: $scope.mydog.bio,
      url: $scope.mydog.url,
      randomize: Math.random(),
      upVotes: [],
      downVotes: [],
      matches: []
      });

  $scope.mydog = Dogs.findOne({user_id: Meteor.userId()});
  $scope.viewChoice = 'petProfile';
};

  $scope.description = function() {
    Dogs.update({_id: $scope.mydog._id}, { $set: {bio: $scope.mydog.bio}});
    $scope.viewChoice = 'petProfile';
  };

  $scope.photoUpload = function() {
        //var self = this;
        var files = $("input.btn-pic-upload")[0].files;
        C.upload_stream(files,function(res){
          console.log(res.secure_url);
          $scope.mydog.url = res.secure_url;
          console.log($scope.mydog._id, $scope.mydog.url);
          Dogs.update({_id: $scope.mydog._id}, { $set: {url: res.secure_url}}, function(err, res) {console.log(err, res);});

          $scope.viewChoice = 'petProfile';
        });
    };
}]);
