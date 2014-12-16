angular.module("boneApp").controller("matchCtrl", ['$scope', '$collection', function($scope, $collection) {
  $collection(Dogs).bind($scope, 'Dogs', true, true);
  $collection(Images).bind($scope, 'Images', true, true);

  //var dlist = [];
  //dlist = Images.find().fetch();
  //doglist = Dogs.find().fetch();
  //var urls = _.pluck(dlist, 'url');
  //var names = _.pluck(doglist, 'name');
  //var ages = _.pluck(doglist, 'age');
  //var breeds = _.pluck(doglist, 'breed');
  console.log($scope.Dogs);
  //console.log(ages);
  console.log($scope.Images);
  //var dlisth = doglist.length;
  //var pic = [];
  $scope.counter = 0;

  $scope.match = function() {
    //for (i = 0; i < dlisth; i++) {
      //pic.push(urls[i]);
      //$scope.pics = pic[0];
    //}
  };

  $scope.Yes = function() {
    $scope.counter++;
    //$scope.pics = urls[counter];
    //$scope.name = names[counter];
    //$scope.age = ages[counter];
    //$scope.breed = breeds[counter];
    //counter++;
  };

  $scope.No = function() {
    $scope.counter--;
    //$scope.pics = pic[counter];
    //$scope.name = names[counter];
    //$scope.age = ages[counter];
    //$scope.breed = breeds[counter];
    //counter++;
  };

}]);
