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
    .state('dogPic', {
      url: "/dogpic",
        template: UiRouter.template("edit-dog-pic.html"),
        controller: "DogProfileCtrl"
      })
    .state('editDogInfo', {
        url: '/dogstats',
        template: UiRouter.template("edit-dog-info.html"),
        controller: "DogProfileCtrl"
      })
    .state('dogBio', {
        url: '/dogbio',
        template: UiRouter.template("dog-bio.html"),
        controller: "DogProfileCtrl"
      })
    .state('match', {
      url: "/match",
      template: UiRouter.template("match.html"),
      controller: "matchCtrl"
    });

    $urlRouterProvider.otherwise('/main');
}]);
