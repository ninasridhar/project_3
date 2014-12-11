app.controller('PostController', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {


  $http.get('/bookmarks.json').success(function(data){
    $scope.bookmarks = data;
  });

  $scope.sanitizedata = function(bookmarks, user){
    var posts = $scope.posts;
    for (var j = 0 ; j < posts.length; j++) {
      var bookmarks = posts[j].bookmarks;
    for (var i = 0 ; i < bookmarks.length; i++) {
      if (bookmarks[i].user_id != user.id){
        var index = bookmarks.indexOf(bookmarks[i]);
        bookmarks.splice(index, 1);
        console.log(bookmarks);
      };
    };
  };
}

  // $.each(data, function(index, post){
  //   $.each(post.bookmarks, function(index, bookmark){
  //     if(bookmark.user_id !== currentUser.id){
  //          var index = post.bookmarks.indexOf(bookmark)
  //         post.bookmarks.splice(index, 1);
  //       console.log(bookmarks);
  // }  
  // })
  // });

  $scope.sanitizedata($scope.bookmarks, currentUser);

  if ($routeParams.id){  
    $http.get('/posts/' + $routeParams.id + '.json').success(function(data){
      $scope.post = data;
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

  $scope.rebookmarkPost = function(user, bookmark){
    var id = bookmark.id
    bookmark.bookmarked = true;
    bookmark.search_b = "bookmarks";
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      console.log(bookmark);
      $scope.bookmarked = true;
    });
  };
  
  $scope.unbookmarkPost = function(user, bookmark){
    var id = bookmark.id
    bookmark.bookmarked = false;
    bookmark.search_b = "";
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      console.log(bookmark);
      $scope.bookmarked = true;
    });
  };

  $scope.bookmarkPost = function(user, post){
    var data  = {};
    data.bookmarked = true;
    data.user_id = $scope.currentUser.id;
    data.post_id = post.id;
    data.search_b = "bookmarks";
    $http.post('/bookmarks.json', {bookmark: data}).success(function(bookmark){
      $scope.post.bookmarks.push(bookmark);
      $scope.bookmarked = true;
    });
  };

  $scope.refavouritePost = function(user, bookmark){
    var id = bookmark.id
    bookmark.favourited = true;
    bookmark.search_f = "favourites";
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      $scope.bookmarked = true;
    });
  };
  
  $scope.unfavouritePost = function(user, bookmark){
    var id = bookmark.id
    bookmark.favourited = false;
    bookmark.search_f = " ";
    $http.put('/bookmarks/' + id +'.json', {bookmark: bookmark}).success(function(bookmark){
      $scope.bookmarked = true;
    });
  };

  $scope.favouritePost = function(user, post){
    var data  = {};
    data.favourited = true;
    data.user_id = $scope.currentUser.id;
    data.post_id = post.id; 
    data.search_f = "favourites";
    $http.post('/bookmarks.json', {bookmark: data}).success(function(bookmark){
      $scope.post.bookmarks.push(bookmark);
      $scope.bookmarked = true;
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