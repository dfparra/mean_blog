(function(){
  angular.module('ngBlog')
          .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope'];

  function SignupController($scope){
    $scope.message = 'THIS SIGNUP PAGE';


  }


})();
