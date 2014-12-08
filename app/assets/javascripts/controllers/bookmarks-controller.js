app.controller('BookmarkController', function($scope, $http, $){
  $http.get('/bookmarks.json').success(function(data){
   $scope.bookmarks = data; 
 });
});