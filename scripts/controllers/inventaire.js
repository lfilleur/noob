'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison1Ctrl
 * @description
 * # Saison1Ctrl
 * Controller of the Saison1Ctrl
 */
var app = angular.module('grimoire');

  app.controller('ListeMonstreCtrl', function($scope, $http) {

      var url = 'http://localhost/bddnoob/listeMonstre.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Monstre');

      });

       function httpSuccess (response){
         $scope.listeMonstre = response;
      }

  });
 

  	
  


   


  
  
  