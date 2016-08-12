(function(){
  angular.module('ngBlog')
          .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$scope'];

  function ProfileController($scope){
    $scope.message = 'THIS PROFILE PAGE';


  }

})();
