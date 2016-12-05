'use strict';

/* Services */

var testServices = angular.module('testServices', []);

testServices
  .factory('Processes',       require('./processes'))
  .factory('Team',            require('./team'))