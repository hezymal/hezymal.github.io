exports = module.exports = ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
  $scope.formData2 = {};
  $scope.addEventForm = function() {
    $http({
      url     : 'addevent.php',
      method  : 'POST',
      data    : $httpParamSerializerJQLike($scope.formData2),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(){
      console.log('ok');
    })
    .error(function(){
      console.log('error');
    })
    $scope.formData2 = {};
  }
}];