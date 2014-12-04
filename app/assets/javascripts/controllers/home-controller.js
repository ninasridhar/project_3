app.controller('HomeController', function($scope, $http){

  $http.get('/posts.json').success(function(data){
    $scope.posts = data; 
  });
   
  $scope.selectPost = function(post){
      $scope.selectedPost = post;
  };

  $scope.clearSelectedPost = function(){
    $scope.selectedPost = false;
  };
});

app.directive('postsList', function(){
  return {
    restrict: 'AEC',
    templateUrl: "<%= asset_path('list.html')%>"
  };
});

