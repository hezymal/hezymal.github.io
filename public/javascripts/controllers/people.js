exports = module.exports = ['$scope', '$stateParams', 'Team', function ($scope, $stateParams, Team) {
  $scope.people = Team.get({id: $stateParams.id});
}];