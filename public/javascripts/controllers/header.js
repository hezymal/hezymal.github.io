exports = module.exports = ['$scope', 'ngDialog', function ($scope, ngDialog) {
  $scope.clickToOpen = function () {
    var dialog = ngDialog.open({
      template: 'menu'
    });
    dialog.closePromise.then(function (data) {
      $scope.toggle = false;
    });
  };
  $scope.closeDialog = function () {
    ngDialog.close();
  };
  $scope.toggle = false;
  $scope.changeAction = function(){
    if ($scope.toggle === true) {
      $scope.toggle = false
      $scope.closeDialog()
    }
    else {
      $scope.toggle = true
      $scope.clickToOpen()
    }
  };
}];