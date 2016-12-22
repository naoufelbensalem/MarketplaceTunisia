var routeAppControllers = angular.module('routeAppControllers', []);


//Contrôleur de la page vendors
routeAppControllers.controller('vendorsController', ['$scope','$http',
function($scope,$http){
		$scope.users=[];
   $scope.message = "Bienvenue sur la page du vendeur";
   
   function chargerAll(){
   	$http.get("/user/all")
   	.success(function(data) {
   		$scope.users=data;	
   	});
   };
   chargerAll();
}
]);