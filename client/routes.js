angular.module('boneApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('main', {
      url: "/main",
      template: UiRouter.template("landing-view.html"),
      controller: "LandingCtrl"
    });

    $urlRouterProvider.otherwise('/main');
}]);
