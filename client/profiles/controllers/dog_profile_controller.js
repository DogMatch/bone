angular.module("boneApp").controller("DogProfileCtrl", ['$scope','$collection', function($scope, $collection){
  //$collection(Dogs).bind($scope, 'dogs', true, true);
  //$collection(Images).bind($scope, 'images'. true, true);

  $scope.photoUpload = function() {
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
        Dogs.insert({name: $scope.Dogs.name,
          bio: $scope.Dogs.description,
          age: $scope.Dogs.age,
          sex: $scope.Dogs.sex,
          breed: $scope.Dogs.breed,
          fan: [],
          friend: [],
          foe: []
        });

      } else {
        preview.src = "";
      }
    };
}]);
