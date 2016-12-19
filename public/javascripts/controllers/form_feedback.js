exports = module.exports = ['$scope', '$http', function ($scope, $http) {
    // $scope.url = 'feedback.php';

    // $scope.formsubmit = function(isValid) {
    //   if (isValid) {
    //   $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "message": $scope.message})
    //     .success(function(data, status) {
    //       console.log(data);
    //       $scope.status = status;
    //       $scope.data = data;
    //       $scope.result = data;
    //     })
    //   }else{
    //     alert('Form is not valid');
    //   }
    // }
  // $scope.resultMessage;
  // $scope.formData = {};
  // $scope.processForm = function() {
  //   console.log($httpParamSerializerJQLike($scope.formData));
  //   console.log($scope.formData);
  //   console.log($.param($scope.formData));
  //   $http({
  //     url     : '../feedback.php',
  //     method  : 'POST',
  //     data    : $.param($scope.formData),
  //     headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
  //   }).success(function(data){
  //     console.log(data);
  //     if (data.success) {
  //       $scope.resultMessage = data.message;
  //     } else {
  //       $scope.resultMessage = data.message;
  //     }
  //   });
  // }
}];