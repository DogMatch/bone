angular.module('boneApp', ['angular-meteor', 'ui.router', 'ngImgCrop']);

Meteor.startup(function() {
  angular.bootstrap(document, ['boneApp']);
});

$.cloudinary.config({
  cloud_name: 'bone'
});
