'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers
  .controller('headerCtrl',     require('./header'))
  .controller('processCtrl',    require('./process'))
  .controller('processesCtrl',  require('./processes'))
  .controller('peopleCtrl',     require('./people'))
