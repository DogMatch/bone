angular.module('bone',['angular-meteor', 'ui.router']);

Meteor.startup(function () {
  angular.bootstrap(document, ['bone']);
});