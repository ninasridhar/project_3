app.controller('IngredientController', function($scope, $http){
  $http.get('/ingredients.json').success(function(data){
   $scope.ingredients = data; 
 });
});