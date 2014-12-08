// app.controller('HomeController', function($scope, $http){
// });
app.controller('HomeController', function($scope, $http){
  // $scope.categories = $rootScope.categories
  $scope.currentUser = currentUser;

  $http.get('/categories.json').success(function(data){
    $scope.categories = data;
  });

  $http.get('/courses.json').success(function(data){
    $scope.courses = data;
  });

  $http.get('/posts.json').success(function(data){
    $scope.posts = data;
  });

  $scope.addPost = function(){
    $http.post('/posts.json', {post: $scope.newPost}).success(function(post){
      console.log('hello')
      $scope.posts.push(post);
      $scope.newPost = false;
    })
  }
});