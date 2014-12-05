app.controller('CommentController', function($scope, $http, $rootScope){
  $http.get('/comments.json').success(function(data){
   $rootScope.comments = data; 
 });
});