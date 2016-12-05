'use strict';

var angular = require('angular');
              require('angular-resource');
              require('angular-sanitize');
              require('angular-ui-router');
              require('ng-dialog');
              require('./controllers/_module');
              require('./directives/_module');
              require('./services/_module');
angular
  .module('test', [
    'ngDialog',
    'ngResource',
    'ngSanitize',
    'ui.router',

    'testControllers',
    'testServices',
    'testDirectives'
  ])
  .run(['$rootScope', '$anchorScroll', '$state', function($rootScope, $anchorScroll, $state){
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $anchorScroll();
    });
    $rootScope.$state = $state;
  }])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.
      state('project', {
        url: '/',
        templateUrl: 'templates/project'
      }).
      state('processes', {
        url: '/process/',
        templateUrl: 'templates/processes',
        controller: 'processesCtrl'
      }).
      state('process', {
        url: '/process/:id',
        templateUrl: 'templates/process',
        controller: 'processCtrl'
      }).
      state('team', {
        url: '/team/:id',
        templateUrl: 'templates/team',
        controller: 'peopleCtrl'
      }).
      state('online', {
        url: '/online/',
        templateUrl: 'templates/online'
      });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }])