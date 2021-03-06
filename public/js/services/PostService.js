(function() {
  angular.module('ngBlog')
          .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/posts/'
    var service = {
      getAllPosts: getAllPosts,
      createPost: createPost,
      getPostById: getPostById,
      deletePost: deletePost,
      updatePost: updatePost
    }
    return service;

    function getAllPosts(){
      return $http.get(baseUrl);
    }
    function createPost(postObj){
      return $http.post(baseUrl, postObj);
    }
    function getPostById(postId){
      return $http.get(baseUrl+postId);
    }
    function deletePost(postId){
      return $http.delete(baseUrl+postId);
    }
    function updatePost(postId, postObj){
      return $http.put(baseUrl+postId, postObj);
    }


  }

}());
