// app.controller('HomeController', function($scope, $http){
// });
app.controller('HomeController', function($scope, $http, $rootScope){
  $scope.categories = $rootScope.categories
  
  $http.get('/categories.json').success(function(data){
    $scope.categories = data;
  })

  $http.get('/posts.json').success(function(data){
    $scope.posts = data;
  })
});