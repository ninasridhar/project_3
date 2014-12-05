app.controller('CourseController', function($scope, $http, $rootScope){
  $http.get('/courses.json').success(function(data){
   $rootScope.courses = data; 
 });
});