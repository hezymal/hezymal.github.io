exports = module.exports = ['$scope', 'ngDialog', function ($scope, ngDialog) {
  $scope.eventFormOpen = function () {
    var dialog = ngDialog.open({
      template: 'event_form'
    });
    dialog.closePromise.then(function (data) {
      $scope.toggle = false;
    });
  };
  $scope.closeDialog = function () {
    ngDialog.close();
  };
}];