angular.module("boneApp").controller("matchCtrl", ['$scope', function($scope) {

  $scope.match = function() {
    var display = new FileReader();
    var dlist = [];
    dlist = Images.find().fetch();
    var urls = _.pluck(dlist, 'url');
    console.log(urls);
    var dlisth = urls.length;
    for (i = 0; i < dlisth; i++) {
      var pic = "";
      pic += urls[i];
      $scope.pics = pic;
      console.log(pic);
    }
  };

  $scope.Yes = function() {

  };

  $scope.No = function() {

  };

}]);
