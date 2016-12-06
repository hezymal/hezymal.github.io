'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers
  .controller('headerCtrl',     require('./header'))
  .controller('carouselCtrl',    require('./carousel'))
  // .controller('processesCtrl',  require('./processes'))
  // .controller('peopleCtrl',     require('./people'))
