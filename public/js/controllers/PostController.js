(function(){
  angular.module('ngBlog')
          .controller('PostController', PostController);

  PostController.$inject = ['$scope'];

  function PostController($scope){
    $scope.message = 'THIS POST PAGE';


  }


})();
