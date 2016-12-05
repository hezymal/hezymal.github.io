exports = module.exports = ['$scope', 'Processes', function ($scope, Processes) {
  $scope.processes = Processes.query();
}];