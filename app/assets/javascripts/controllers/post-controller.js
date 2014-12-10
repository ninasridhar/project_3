app.controller('PostController', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {


  if ($routeParams.id){  
    $http.get('/posts/' + $routeParams.id + '.json').success(function(data){
      $scope.post = data
    });
  }

  $http.get('/comments.json').success(function(data){
    $scope.comments = data;
  });


  if ($routeParams.id){  
    $http.get('/bookmarks/' + $routeParams.id + '.json').success(function(data){
      $scope.bookmark = data
    });
  }
  
  $scope.isBookmarked = function(post, user){
    var bookmarks = $scope.bookmarks;
    for (var i = 0 ; i < bookmarks.length; i++) {
      if ((post.id === bookmarks[i].post_id) && (user.id === bookmarks[i].user_id)){
        $scope.bookmarked = true;
        $scope.bookmarker = "bookmarks";
      };
    }; 
  };

  $scope.isBookmarked($scope.post, currentUser);

  $scope.rebookmarkPost = function(bookmark){
    var id = bookmark.id
    bookmark.bookmarked = true;
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      console.log(bookmark);
      $scope.bookmarked = true;
      $scope.bookmarker = "bookmarks";
    });
  };
  
  $scope.unbookmarkPost = function(bookmark){
    var id = bookmark.id
    bookmark.bookmarked = false;
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      console.log(bookmark);
      $scope.bookmarked = true;
      $scope.bookmarker = "bookmarks";
    });
  };

  $scope.bookmarkPost = function(post){
    var data  = {};
    data.bookmarked = true;
    data.user_id = $scope.currentUser.id;
    data.post_id = post.id;
    data.search = "bookmarks favourites"; 
    $http.post('/bookmarks.json', {bookmark: data}).success(function(bookmark){
      $scope.post.bookmarks.push(bookmark);
      $scope.bookmarked = true;
      $scope.bookmarker = "bookmarks";
    });
  };

  $scope.refavouritePost = function(bookmark){
    var id = bookmark.id
    bookmark.favourited = true;
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      console.log(bookmark);
      $scope.bookmarked = true;
      $scope.bookmarker = "bookmarks";
    });
  };
  
  $scope.unfavouritePost = function(bookmark){
    var id = bookmark.id
    bookmark.favourited = false;
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      console.log(bookmark);
      $scope.bookmarked = true;
      $scope.bookmarker = "bookmarks";
    });
  };

  $scope.favouritePost = function(post){
    var data  = {};
    data.favourited = true;
    data.user_id = $scope.currentUser.id;
    data.post_id = post.id;
    data.search = "bookmarks favourites";  
    $http.post('/bookmarks.json', {bookmark: data}).success(function(bookmark){
      $scope.post.bookmarks.push(bookmark);
      $scope.bookmarked = true;
      $scope.bookmarker = "bookmarks";
    });
  };


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

  $scope.addComment = function(post, newComment){
    var data  = {};
    data.comment = newComment.comment;
    data.user_id = $scope.currentUser.id;
    data.post_id = post.id 
    $http.post('/comments.json', {comment: data}).success(function(comment){
      $scope.post.comments.push(comment);
      $scope.newComment = false;
    });
  };

}]);