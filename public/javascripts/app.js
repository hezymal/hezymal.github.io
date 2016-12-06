'use strict';

var angular = require('angular');
              require('angular-resource');
              require('angular-sanitize');
              require('angular-ui-router');
              require('angular-ui-carousel');
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
    'ui.carousel',

    'testControllers',
    'testServices',
    'testDirectives'
  ])
  .run(['$rootScope', '$anchorScroll', '$state', 'Carousel', function($rootScope, $anchorScroll, $state, Carousel){
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $anchorScroll();
    });
    $rootScope.$state = $state;
    Carousel.setOptions({});
  }])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.
      state('project', {
        url: '/',
        templateUrl: 'templates/project'
      }).
      state('processes', {
        url: '/process/',
        templateUrl: 'templates/processes'
      }).
      state('process', {
        url: '/process/:id',
        templateUrl: 'templates/process'
      }).
      state('team', {
        url: '/team/:id',
        templateUrl: 'templates/team'
      }).
      state('online', {
        url: '/online/',
        templateUrl: 'templates/online'
      });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }])