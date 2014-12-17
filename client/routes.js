angular.module('boneApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('main', {
      url: "/main",
      template: UiRouter.template("landing-view.html"),
      controller: "LandingCtrl"
    })
    .state('dogProfile', {
      url: "/dog",
      template: UiRouter.template("dog-profile-view.html"),
      controller: "DogProfileCtrl"
    })
    .state('match', {
      url: "/match",
      template: UiRouter.template("match-view.html"),
      controller: "MatchCtrl"
    });

    $urlRouterProvider.otherwise('/main');
}]);
