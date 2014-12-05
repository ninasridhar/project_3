app.controller('PhotoController', function($scope, $http, $rootScope){
  $http.get('/photos.json').success(function(data){
   $rootScope.photos = data; 
 });
});