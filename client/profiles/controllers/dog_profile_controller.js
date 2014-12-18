'use strict';
angular.module("boneApp").controller("DogProfileCtrl", ['$scope','$collection', '$location', function($scope, $collection, $location){
  $collection(Dogs).bind($scope, 'Dogs', true, true);
  $collection(Images).bind($scope, 'Images', true, true);
  $scope.selfie = Images[0];
  $scope.viewChoice = 'petProfile';

$scope.petEdit = function() {
  $scope.viewChoice = 'petEdit';
};

$scope.petPhoto = function() {
  $scope.viewChoice = 'petPhoto';
};

$scope.petBio = function() {
  $scope.viewChoice = 'petDescription';
};

$scope.petMain = function() {
  $scope.viewChoice = 'petProfile';
};

$scope.dogData = function() {
  Dogs.insert({name: $scope.Dogs.name,
    age: $scope.Dogs.age,
    sex: $scope.Dogs.sex,
    breed: $scope.Dogs.breed,
    fan: [],
    friend: [],
    foe: []
  });
};

  $scope.description = function() {
    Dogs.insert({bio: $scope.Dogs.description});
  };

  $scope.photoUpload = function() {
    var preview = document.getElementById('userPetPic'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file); //reads the data as a URL

      } else {
        preview.src = "";
      }
    };
}]);
