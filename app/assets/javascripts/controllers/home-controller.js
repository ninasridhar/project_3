
app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
// var HomeController = function HomeController($scope, $http) {
  // $scope.categories = $rootScope.categories
  $scope.numLimit = 15;

  $scope.currentUser = currentUser;

  $http.get('/categories.json').success(function(data){
    $scope.categories = data;
  });

  $http.get('/comments.json').success(function(data){
    $scope.comments = data;
  });

   $http.get('/bookmarks.json').success(function(data){
    $scope.bookmarks = data;
  });

  $http.get('/courses.json').success(function(data){
    $scope.courses = data;
  });

  $http.get('/posts.json').success(function(data){
    $scope.posts = data;
  });



  $scope.addPost = function(){
      $scope.newPost.user_id = currentUser.id;
    $http.post('/posts.json', {post: $scope.newPost}).success(function(post){
      $scope.posts.push(post);
      $scope.newPost = false;
      $scope.postForm.$setPristine();
    })
  }


  $scope.selectPost = function(post){
      $scope.selectedPost = post;
  };

  $scope.clearSelectedPost = function(){
    $scope.selectedPost = false;
  };
}]) ;

// HomeController.$inject = ['$scope', '$http'];