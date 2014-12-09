app.controller('PostController', function($scope, $routeParams, $http, $location){
  if ($routeParams.id){
  $http.get('/posts/' + $routeParams.id + '.json').success(function(data){
    $scope.post = data
  });
  }

   $http.get('/comments.json').success(function(data){
    $scope.comments = data;
  });


  $scope.deletePost = function(post){
    $http.delete('/posts/' + post.id +'.json').success(function(data){
      $scope.posts.splice( $scope.posts.indexOf(post), 1);
    });
  };

  $scope.clearPost = function(){
    $scope.editPost = false;
    $scope.SelectedPost = false;
  }

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
      $scope.clearPost();
    });
  };

  $scope.addComment = function(){
    var data  = {};
    data.comment = $scope.newComment.comment;
    data.user_id = $scope.currentUser.id;
    data.post_id = $scope.post.id 
    $http.post('/comments.json', {comment: data}).success(function(comment){
      $scope.post.comments.push(comment);
      $scope.newComment = false;
    });
  };

  $scope.isBookmarked = function(post, user){
    var bookmarks = $scope.bookmarks;
    for (var i = 0 ; i < bookmarks.length; i++) {
      if (post.id === bookmarks[i].post_id){
        if (user.id === bookmarks[i].user_id){
        return true;
        };
      };
    };
  };

  $scope.bookmarkPost = function(post){
    var data  = {};
    data.bookmarked = true;
    data.user_id = $scope.currentUser.id;
    data.post_id = $scope.post.id 
    $http.post('/bookmarks.json', {bookmark: data}).success(function(bookmark){
      $scope.bookmarks.push(bookmark);
    });
  };

});
