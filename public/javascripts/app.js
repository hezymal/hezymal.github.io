'use strict';
var Swiper  = require('swiper');
var angular = require('angular');
              require('angular-resource');
              require('angular-translate');
              require('angular-sanitize');
              require('angular-swiper');
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
    'pascalprecht.translate',
    'ksSwiper',

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

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
    $stateProvider.
      state('project', {
        url: '/',
        templateUrl: 'templates/home'
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
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider
      .translations('en_US', require('../json/locale/locale-en_US.json'))
      .translations('ru_RU', require('../json/locale/locale-ru_RU.json'))
      .preferredLanguage('ru_RU')
      .useSanitizeValueStrategy('escapeParameters')
  }])