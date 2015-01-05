'use strict';
angular.module('boneApp').controller('DogProfileCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  if (!Meteor.userId()) $location.path('/');

  $scope.errors = [];
  Tracker.autorun(function(self) {
    $scope.mydog = Dogs.findOne({user_id: Meteor.userId()});
    if (!$scope.$root.$$phase) $scope.$apply();
    $scope.$on('$destroy', function() {
      self.stop(); // Stop computation if scope is destroyed.
    });
  });

  if (!$scope.mydog) {
    $scope.mydog = {};
    $scope.mydog.name = '';
    $scope.mydog.age = null;
    $scope.mydog.breed = '';
    $scope.mydog.sex = '';
    $scope.mydog.bio = '';
    $scope.mydog.url = '';
    $scope.viewChoice = 'petProfile';
  } else {
    $scope.viewChoice = 'petProfile';
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

    if (!$scope.mydog._id) {
      Dogs.insert({
        name: $scope.mydog.name,
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

    } else {
      Dogs.update({
        _id: $scope.mydog._id
      },
      { $set:
        {
          name: $scope.mydog.name,
          age: $scope.mydog.age,
          sex: $scope.mydog.sex,
          breed: $scope.mydog.breed,
          bio: $scope.mydog.bio,
          url: $scope.mydog.url,
          randomize: Math.random(),
          upVotes: [],
          downVotes: [],
          matches: []
        }
      });
    }

    //$scope.mydog = Dogs.findOne({user_id: Meteor.userId()});
    $scope.viewChoice = 'petProfile';
  };

  $scope.description = function() {
    Dogs.update({_id: $scope.mydog._id}, { $set: {bio: $scope.mydog.bio}});
    $scope.viewChoice = 'petProfile';
  };

  $scope.photoUpload = function() {
    var files = $('input.btn-pic-upload')[0].files;
    C.upload_stream(files, function(res) {
      $scope.mydog.url = res.secure_url;
      Dogs.update({_id: $scope.mydog._id}, { $set: {url: res.secure_url}}, function() {
        document.getElementById('userPetPic').attr('url', $scope.mydog.url);
      });
    });
  };
}]);
