app.controller('PostsController', function($scope, $http, $rootScope){

  $http.get('/posts.json').success(function(data){
    $rootScope.posts = data; 
  });

  $rootScope.selectPost = function(post){
      $rootScope.selectedPost = post;
  };

  $rootScope.clearSelectedPost = function(){
    $rootScope.selectedPost = false;
  };
});

