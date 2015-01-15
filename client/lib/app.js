'use strict';
angular.module('boneApp', ['angular-meteor', 'ui.router']);

Meteor.startup(function() {
  angular.bootstrap(document, ['boneApp']);
});
