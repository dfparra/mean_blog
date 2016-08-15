(function() {
  angular.module('ngBlog')
          .factory('CommentService', CommentService);

  CommentService.$inject = ['$http'];

  function CommentService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/comments/'
    var service = {
      getCommentsForAPost: getCommentsForAPost,
      createComment: createComment,
      deleteComment: deleteComment,
      updateComment: updateComment
    };
    return service;

    function getCommentsForAPost(postId){
      return $http.get(baseUrl + postId);
    }
    function createComment(comObj){
      return $http.post(baseUrl, comObj);
    }
    function deleteComment(comId){
      return $http.delete(baseUrl+comId);
    }
    function updateComment(comId,comObj){
      return $http.put(baseUrl+comId, comObj);
    }


  }

}());
