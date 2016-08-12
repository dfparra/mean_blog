(function() {
  angular.module('ngBlog')
          .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope'];

  function LoginController($scope){
    $scope.message = 'THIS LOGIN PAGE';

    
  }

})();
