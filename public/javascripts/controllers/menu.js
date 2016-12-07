exports = module.exports = ['$scope', '$translate', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
}];