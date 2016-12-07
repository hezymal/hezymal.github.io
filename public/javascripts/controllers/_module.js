'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers
  .controller('headerCtrl',     require('./header'))
  .controller('menuCtrl',       require('./menu'))
  // .controller('carouselCtrl',   require('./carousel'))
  // .controller('processesCtrl',  require('./processes'))
  // .controller('peopleCtrl',     require('./people'))
