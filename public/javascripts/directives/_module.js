'use strict';

/* Directives */

var testDirectives = angular.module('testDirectives', []);

testDirectives
  .directive('backImg',  require('./back-img'))
  .directive('backGrad',  require('./back-grad'))
