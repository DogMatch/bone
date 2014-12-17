angular.module("boneApp").controller("DogProfileCtrl", ['$scope','$collection', '$location', function($scope, $collection, $location){
  $collection(Dogs, {user_id: Meteor.userId()}).bind($scope, 'dogs', true, true);
  $collection(Images).bind($scope, 'Images', true, true);
  $scope.selfie = Images[0];
  $scope.viewChoice = 'petProfile';
  if (!Meteor.userId()) {
    $location.path('/');
  } 

  if(!$scope.dogs){
    petEdit();
  }

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
    user_id: Meteor.userId(),
    randomize: Math.random(),
    upVotes: [],
    downVotes: [],
    matches: []
  });
};

  $scope.description = function() {
    Dogs.insert({bio: $scope.Dogs.description});
  };

  $scope.photoUpload = function() {
    var preview = document.querySelector('img'); //selects the query named img
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
