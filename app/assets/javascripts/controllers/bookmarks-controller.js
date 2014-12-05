app.controller('BookmarkController', function($scope, $http, $rootScope){
  $http.get('/bookmarks.json').success(function(data){
   $rootScope.bookmarks = data; 
 });
});