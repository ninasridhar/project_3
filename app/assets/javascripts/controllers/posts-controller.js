app.controller('PostController', function($scope, $routeParams, $http, $location){
  if ($routeParams.id){
  $http.get('/posts/' + $routeParams.id + '.json').success(function(data){
    $scope.post = data
  });
  }

  $scope.deletePost = function(post){
    $http.delete('/posts/' + post.id +'.json').success(function(data){
      $scope.posts.splice( $scope.posts.indexOf(post), 1);
    });
  };

  $scope.setEditPost = function(post){
    $scope.editPost = post;
  };

  $scope.clearEditPost = function(){
    $scope.editPost = false;
  };

  $scope.updatePost = function(post){
    var data = {};
    data.title = post.title;
    data.category = post.category;
    
    $http.put('/posts/' + post.id +'.json', {data: data})
    .success(function(data){
      $scope.clearSelectedPost();
      $scope.clearEditPost();
    });
  };
});
