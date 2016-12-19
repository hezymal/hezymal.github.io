'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers
  .controller('menuCtrl',          require('./menu'))
  .controller('translateCtrl',     require('./translate'))
  .controller('formAddEventCtrl',  require('./form_add_event'))
  .controller('formFeedbackCtrl',  require('./form_feedback'))

  .controller('homeCtrl',  require('./home'))
  // .controller('carouselCtrl',   require('./carousel'))
  // .controller('processesCtrl',  require('./processes'))
  // .controller('peopleCtrl',     require('./people'))
