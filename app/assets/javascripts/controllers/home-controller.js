app.controller('HomeController', function($scope, $http){
  $http.get('/posts.json').success(function(data){
    $scope.posts = data; 
  });


  app.directive('postsList', function(){
    return {
      restrict: 'AEC',
      templateUrl: "<%= asset_path('list.html')%>"
    };
  });
});