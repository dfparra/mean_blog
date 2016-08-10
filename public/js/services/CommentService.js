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

    function getCommentsForAPost(){
      return $http.get(baseUrl);
    }
    function createComment(){
      return $http.post();
    }
    function deleteComment(){}
    function updateComment(){}


  }

}());
