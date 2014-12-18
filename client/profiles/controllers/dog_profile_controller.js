angular.module("boneApp").controller("DogProfileCtrl", ['$scope','$collection', '$location', function($scope, $collection, $location){
  if (!Meteor.userId()) {
    $location.path('/');
  } else {
    $scope.curUserId = Meteor.userId;
  }
  $scope.dogs = Dogs.findOne({user_id: Meteor.userId()});
  //$collection(Dogs, {user_id: Meteor.userId()}).bind($scope, 'dogs', true, true);
  //$scope.selfie = dogs.url;
console.log($scope.dogs);
  if(!$scope.dogs){
    $scope.dogs= {};
    $scope.dogs.name = "";
    $scope.dogs.age = 0;
    $scope.dogs.breed = "";
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
  $scope.dogId = Dogs.insert({name: $scope.dogs.name,
    age: $scope.dogs.age,
    sex: $scope.dogs.sex,
    breed: $scope.dogs.breed,
    user_id: Meteor.userId(),
    bio: $scope.dogs.bio,
    randomize: Math.random(),
    upVotes: [],
    downVotes: [],
    matches: []
  });
  $scope.dogs = Dogs.findOne({user_id: Meteor.userId()});
  $scope.viewChoice = 'petProfile';
};

  $scope.description = function() {
    Dogs.update({_id: $scope.dogs_id, bio: $scope.dogs.bio});
    $scope.viewChoice = 'petProfile';
  };

  $scope.photoUpload = function() {
        self = this;
        var files = $("input.btn-pic-upload")[0].files;
        C.upload_stream(files,function(res){
          console.log(res);
          console.log(res.secure_url);
          Dogs.update({_id: $scope.dogs_id, url: res.secure_url});
        });



    //var preview = document.getElementById('userPetPic'); //selects the query named img
    //var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    //var reader  = new FileReader();
    //$scope.viewChoice = 'petProfile';

    //reader.onloadend = function () {
    //  preview.src = reader.result;
      //};

      //if (file) {
      //  reader.readAsDataURL(file); //reads the data as a URL

      //} else {
      //  preview.src = "";
      //}
    };
}]);
