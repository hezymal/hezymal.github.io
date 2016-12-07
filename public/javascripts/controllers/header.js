exports = module.exports = ['$scope', 'ngDialog', function ($scope, ngDialog) {
  $scope.clickToOpen = function () {
    var dialog = ngDialog.open({
      template: 'menu'
    });
    dialog.closePromise.then(function (data) {
      this.toggle = false;
    });
  };
  $scope.closeDialog = function () {
    ngDialog.close();
  };
  this.toggle = false;
  $scope.changeAction = function(){
    if ($scope.toggle === true) {
      this.toggle = false
      $scope.closeDialog()
    }
    else {
      this.toggle = true
      $scope.clickToOpen()
    }
  };
}];