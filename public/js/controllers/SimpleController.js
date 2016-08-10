(function(){
  angular.module('ngBlog')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'PostService', 'CommentService'];

  function SimpleController($scope, UserService, PostService, CommentService){
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
      age: 69,
      email: 'pizzapast@buffet.com'
    };

    var postObj = {
      title: 'UPDATE THIS IS THE TITLE QEJEQADKJNERKC',
      author: '57a52637ae789bb497b45afc',
      body: 'UPDATE THIS IS THE BODY BECAUSERKTKEJAS'
    };

    var comObj = {
      author: '57a52637ae789bb497b45afc',
      body: 'UPDATE THIS IS BODY QEWFUIQWEF',
      post: '57a3c636dd2539ea73cfb549'
    };


    // CommentService.getCommentsForAPost()
    //                 .then(function(response){
    //                   console.log(response);
    //                 });
    //
    // CommentService.createComment(comObj)
    //                 .then(function(response){
    //                   console.log(response);
    //                 });

    // CommentService.deleteComment("57abb26fcda1221100f4b48d")
    //               .then(function(response){
    //                 console.log(response);
    //               });

    // CommentService.updateComment("57abb3d3cda1221100f4b48f",comObj)
    //               .then(function(response){
    //                 console.log(response);
    //               });

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

    // PostService.updatePost("57aa72b8be3744110070208e", postObj)
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

    // UserService.updateUser("57abb218cda1221100f4b48b", userObj)
    //             .then(function(response){
    //               console.log(response);
    //             });

  }
})();
