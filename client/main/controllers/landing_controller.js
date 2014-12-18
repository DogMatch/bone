'use strict';
angular.module('boneApp').controller('LandingCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  $scope.alerts = [];
  $scope.curUser = Meteor.user();
  $scope.viewChoice = 'signed-out';
  if (Meteor.userId()) {
    $scope.viewChoice = 'signed-in';
    console.log(Meteor.user());
  }
  console.log(Meteor.userId());
  console.log($scope.viewChoice);
  
  $scope.backToLanding = function() {
    console.log('back to / ');
    if (Meteor.userId) {
      $scope.viewChoice = 'signed-out';
    } else {
      $scope.viewChoice = 'signed-in';
    }
  };

  // much of the custom login functionality from: http://blog.benmcmahen.com/post/41741539120/building-a-customized-accounts-ui-for-meteor
  $scope.createUser = function() {
    if ($scope.newUser.password != $scope.newUser.passwordConfirm) return;
      console.log('Creating User!');
    Accounts.createUser({
      email: $scope.newUser.email,
      password : $scope.newUser.password
    }, function(err) {
      if (err) {
        console.log(err);
        // error: new account creation failed
      } else {
        // success: new account created
        $location.path('/dog');
      }
    });
  };

  $scope.editUser = function() {
    if (!Meteor.userId()) return $scope.viewChoice = 'signed-out';
    if ($scope.curUser.passwordNew != $scope.curUser.passwordConfirm) return;
      console.log('Changing Password!');
    Accounts.changePassword(
      $scope.curUser.passwordOld,
      $scope.curUser.passwordNew,
      function(err) {
      if (err) {
        console.log(err);
        // error: new account creation failed
      } else {
        // success: new account created
        $location.path('/dog');
      }
    });
  };

  $scope.signInFacebook = function() {
    Meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, function(err) {
      if (err) {
        console.log(err);
        // error: ther was a problem signing in with facebook
      } else {
        // success: signed in with facbook
        $location.path('/dog');
      }
    });
  };

  $scope.signInUser = function() {
    Meteor.loginWithPassword(
      $scope.user.email,
      $scope.user.password,
      function(err) {
      console.log('Signing in!');
      if (err) {
        console.log(err);
        // error: there was a problem signing in
      } else {
        // success: signed in
        $location.path('/dog');
      }
    });
  };

  $scope.signOutUser = function() {
    Meteor.logout(function(err) {
      if (err) {
        // error: there was a problem signing out
      } else {
        // success: signed out
        $scope.viewChoice = 'signed-out';
        $location.path('/');
      }
    });
  };

  var trimInput = function(val) {
      return val.replace(/^\s*|\s*$/g, "");
  };
  var isValidPassword = function(val) {
       return val.length >= 6 ? true : false;
  };

}]);
