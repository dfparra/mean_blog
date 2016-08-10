(function(){
  angular.module('ngBlog')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'PostService', 'CommentService'];

  function SimpleController($scope, UserService, PostService){
    $scope.message = 'Hey! Angular Works!';

    // UserService.getAllUsers()
    //             .then(function(response){
    //               console.log(response);
    //             });

    // PostService.getAllPosts()
    //             .then(function(response){
    //               console.log(response);
    //             });


    var userObj = {
      firstName: 'Big',
      lastName: 'Papa',
      age: 41,
      email: 'pizzapastag@buffet.com'
    };

    var postObj = {
      title: 'THIS IS THE TITLE',
      author: '57a52637ae789bb497b45afc',
      body: 'THIS IS THE BODY'
    };

    // PostService.createPost(postObj)
    //             .then(function(response){
    //               console.log(response);
    //             });

    // PostService.getPostById("57aa7477be37441100702097")
    //             .then(function(response){
    //               console.log(response);
    //             });

    // PostService.deletePost("57aa7477be37441100702097")
    //             .then(function(response){
    //               console.log(response);
    //             });

    // UserService.createUser(userObj)
    //             .then(function(response){
    //               console.log(response);
    //             });

    // UserService.getOneUser("57a92b3f0bdf701100b451c5")
    //             .then(function(response){
    //               console.log(response);
    //             });

    // UserService.updateUser("57a92b3f0bdf701100b451c5", "qewfwfq")
    //             .then(function(response){
    //               console.log(response);
    //             });

    // UserService.deleteUser("57a92b3f0bdf701100b451c5")
    //             .then(function(response){
    //               console.log(response);
    //             });

  }
})();
