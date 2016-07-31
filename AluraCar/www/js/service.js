angular.module('starter')
.service('CarroService', function($http){

    var url = 'http://aluracar.herokuapp.com/';

    return {
        obterCarros : function(){
            return $http.get(url).then(function(response){
                //funcao de callback -> response
                return response.data;
            });
        },

        salvarPedido : function(pedido){
            return $http.get(url + "salvarpedido", pedido).then(function(response){
                return "Deu cerot.";
            });
        }
    }

});
