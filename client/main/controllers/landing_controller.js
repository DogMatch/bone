angular.module('boneApp').controller('LandingCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.errors = [];

  // much of this code from: http://blog.benmcmahen.com/post/41741539120/building-a-customized-accounts-ui-for-meteor
console.log($rootScope.currentUser);

  $scope.signInUser = function() {
    Meteor.loginWithPassword($scope.user.email, $scope.user.password, function(err){
      console.log('Signing in!');
      if (err) {
        console.log(err);
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed. 
      } else {
        console.log($rootScope.currentUser);
        // The user has been logged in.
      }
    });
  };

  $scope.createUser = function() {
    if ($scope.newUser.password != $scope.newUser.passwordConfirm) return;
      console.log('Creating User!');
    Accounts.createUser({
      email: $scope.newUser.email,
      password : $scope.newUser.password
    }, function(err){
      if (err) {
        console.log(err);
        // Inform the user that account creation failed
      } else {
        console.log($rootScope.currentUser);
        // Success. Account has been created and the user
        // has logged in successfully. 
      }
    });
  };

  var trimInput = function(val) {
      return val.replace(/^\s*|\s*$/g, "");
  }
  var isValidPassword = function(val) {
       return val.length >= 6 ? true : false;
  }

}]);
