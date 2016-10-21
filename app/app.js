'use strict';

// Declare app level module which depends on views, and components
angular.module('notePad', [
  'ngRoute',
  'ngAnimate',
  'ngStorage',
  'notePad.Views',
  'noteList',
  'noteEditor'
]).
config([
  '$locationProvider',
  '$routeProvider',
  '$localStorageProvider',
  function($locationProvider, $routeProvider, $localStorageProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/main', { template: '<main-view />' }).
      when('/add', { template: '<edit-view />' }).
      when('/edit/:noteId', { template: '<edit-view />' }).
      otherwise({redirectTo: '/main'});

    if ($localStorageProvider.get('noteList') == null)
      $localStorageProvider.set('noteList', []);
  }
]);
