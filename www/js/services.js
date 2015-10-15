var services = angular.module('services', []);

services.factory('ConnectionService', function(Storage) {
  var objService = {
    check: function() {
      if(navigator.connection != undefined){
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 1;//'Unknown connection';
        states[Connection.ETHERNET] = 2;//'Ethernet connection';
        states[Connection.WIFI]     = 3;//'WiFi connection';
        states[Connection.CELL_2G]  = 4;//'Cell 2G connection';
        states[Connection.CELL_3G]  = 5;//'Cell 3G connection';
        states[Connection.CELL_4G]  = 6;//'Cell 4G connection';
        states[Connection.CELL]     = 7;//'Cell generic connection';
        states[Connection.NONE]     = 8;//'No network connection';
        return states[networkState];
      }else{
        return null
      }
    }
  };
  return objService;
});

services.factory('SeedStorage', function(Storage){
  return {
    setCategoryTax: function(){
      var obj = [{"id":"1", "name": "imported", "sales_tax": "5"}, {"id":"2", "name": "non imported", "sales_tax": "10"}];
      localStorage.setItem("category_taxs", JSON.stringify(obj));
    },

    setCategoryProduct: function(){
      var obj = [{"id": "1", "name": "food"}, {"id": "2", "name": "book"}, {"id": "3", "name":"medical"}, {"id": "4", "name": "other"}];
      localStorage.setItem("category_products", JSON.stringify(obj));
    },

    setProduct: function(){
      var obj = [
        {"id": "1", "category_products_id": "1", category_taxs_id: "2", "name": "Chocolate", "price": "0.85"},
        {"id": "2", "category_products_id": "2", category_taxs_id: "2", "name": "Book First", "price": "30000"},
        {"id": "3", "category_products_id": "2", category_taxs_id: "2", "name": "Book Second", "price": "20000"},
        {"id": "4", "category_products_id": "3", category_taxs_id: "1", "name": "Imported perfume", "price": "50000"}
      ];
      localStorage.setItem("products", JSON.stringify(obj));
    }
  }
})

services.factory('Storage', function(){
  return {
    getItem: function (key) {
      return localStorage.getItem(key);
    },

    getObject: function (key) {
      return JSON.parse(localStorage.getItem(key));
    },

    setItem: function (key, data) {
      localStorage.setItem(key, data);
    },

    setObject: function (key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },

    filterObject: function(key, ids){

    },

    remove: function (key) {
      localStorage.removeItem(key);
    },

    clearAll : function () {
      localStorage.clear();
    }
  };
});

services.factory('ProductsService', function($q, $http, Storage){
  return {
    indexProducts: function(){
      return Storage.getObject("products");
    },

    detailProducts: function(ids){
      return Storage.filterObject("products", ids);
    }
  };
});