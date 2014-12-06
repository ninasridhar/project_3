// app.controller('HomeController', function($scope, $http){
// });
app.controller('HomeController', function($scope, $http, $rootScope){
  // $scope.categories = $rootScope.categories
  $scope.currentUser = currentUser;

  $http.get('/categories.json').success(function(data){
    $scope.categories = data;
  });

  $http.get('/posts.json').success(function(data){
    $scope.posts = data;
  });
});