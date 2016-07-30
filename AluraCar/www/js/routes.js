angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

    //configurando rota padrão
    $urlRouterProvider.otherwise('/listagem');

    $stateProvider.state('listagem', {
        url : '/listagem',
        templateUrl : 'templates/listagem.html',
        contoller : 'ListagemController'
    })

    .state('carroescolhido', {
        url : '/carroescolhido/:carro',
        templateUrl : 'templates/carroescolhido.html',
        controller : 'CarroEscolhidoController'
    })

    .state('finalizarpedido', {
        url : '/finalizarpedido',
        templateUrl : 'templates/finalizarpedido.html',
        controller : 'FinalizarPedidoController'
    })

})
