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
    $scope.editpPost = post;
  };

  $scope.updatePost = function(post){
    $http.put('/posts/' + post.id +'.json', {post: post}).success(function(data){
      $scope.editPost = false;
    });
  };
});
