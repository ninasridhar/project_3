app.controller('PostsController', function($scope, $http){

  // $http.get('/posts.json').success(function(data){
  //   $rootScope.posts = data; 
  // });


  $scope.selectPost = function(post){
      $scope.selectedPost = post;
  };

  $scope.clearSelectedPost = function(){
    $scope.selectedPost = false;
  };
});

