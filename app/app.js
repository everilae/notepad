'use strict';

// Declare app level module which depends on views, and components
angular.module('notePad', [
  'ngRoute',
  'ngAnimate',
  'ngStorage',
  'noteList',
  'noteEditor'
]).
config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/main', {
        /* FIXME: Create proper views */
        template: '<note-list></note-list>'
      }).
      when('/add', {
        template: '<note-editor></note-editor>'
      }).
      when('/edit/:noteId', {
        template: '<note-editor></note-editor>'
      }).
      otherwise({redirectTo: '/main'});
  }
]);
