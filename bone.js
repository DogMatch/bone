if (Meteor.isClient) {
    angular.module('bone',['angular-meteor']);

    Meteor.startup(function () {
      angular.bootstrap(document, ['bone']);
    });

    angular.module("bone").controller("profileCtrl", ['$scope', function($scope){
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
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
