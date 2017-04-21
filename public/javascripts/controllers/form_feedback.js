exports = module.exports = ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
  $scope.formData = {};
  $scope.feedbackForm = function() {
    $http({
      url     : 'feedback.php',
      method  : 'POST',
      data    : $httpParamSerializerJQLike($scope.formData),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(){
      console.log('ok');
    })
    .error(function(){
      console.log('error');
    })
    $scope.formData = {};
  }
}];