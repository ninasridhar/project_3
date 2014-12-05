app.controller('IngredientController', function($scope, $http, $rootScope){
  $http.get('/ingredients.json').success(function(data){
   $rootScope.ingredients = data; 
 });
});