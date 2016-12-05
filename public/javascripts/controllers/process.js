exports = module.exports = ['$scope', '$stateParams', 'Processes', function ($scope, $stateParams, Processes) {
  $scope.process = Processes.get({id: $stateParams.id});
}];