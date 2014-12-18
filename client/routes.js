'use strict';
angular.module('boneApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('main', {
      url: "/main",
      template: UiRouter.template("landing-view.html"),
      controller: "LandingCtrl"
    })
    .state('profile', {
      url: "/profile",
      template: UiRouter.template("dog-profile-view.html"),
      controller: "DogProfileCtrl"
    })
    .state('matchup', {
      url: "/matchup",
      template: UiRouter.template("match-view.html"),
      controller: "MatchCtrl"
    })
    .state('messages', {
      url: "/messages",
      template: UiRouter.template("messages-view.html"),
      controller: "MessagesCtrl"
    })
    .state('settings', {
      url: "/settings",
      template: UiRouter.template("landing-view.html"),
      controller: "LandingCtrl"
    });

  $urlRouterProvider.otherwise('/main');
}]);
