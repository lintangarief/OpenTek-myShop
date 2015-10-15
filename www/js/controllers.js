angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, SeedStorage, Storage) {
  SeedStorage.setCategoryTax();
  SeedStorage.setCategoryProduct();
  SeedStorage.setProduct();
})

.controller('ProductsCtrl', function($scope, ProductsService) {
  $scope.products = ProductsService.indexProducts() ? ProductsService.indexProducts() : []; 

})

.controller('ProductCtrl', function($scope, $stateParams) {
});
