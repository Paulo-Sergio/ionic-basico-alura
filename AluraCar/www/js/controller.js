angular.module('starter')
.controller('ListagemController', function($scope, CarroService){
    //injetando CarroService para consumir os dados da url
    CarroService.obterCarros().then(function(dados){//function de callback
        $scope.listaDeCarros = dados;
    });

    /*carros de forma estatica (forma antiga)
    $scope.listaDeCarros = [
        {"nome":"BMW 120i", "preco":70000},
        {"nome":"Onix 1.6", "preco":35000},
        {"nome":"Fiesta 2.0", "preco":52000},
        {"nome":"C3 1.0", "preco":22000},
        {"nome":"Uno Fire", "preco":11000},
        {"nome":"Sentra 2.0", "preco":53000},
        {"nome":"Astra Sedan", "preco":39000},
        {"nome":"Vectra 2.0 Turbo", "preco":37000},
        {"nome":"Hilux 4X4", "preco":90000},
        {"nome":"Montana Cabine Dupla", "preco":57000},
        {"nome":"Outlander 2.4", "preco":99000},
        {"nome":"Fusca 1500", "preco":6000}
    ];*/

});

angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope){
    //$stateParams -> recebendo os parametros :carro
    $scope.carroEscolhido = angular.fromJson($stateParams.carro);

    $scope.listaDeAcessorios = [
        {"nome":"Freio ABS", "preco":800},
        {"nome":"Ar Conficionado", "preco":1000},
        {"nome":"MP3 Player", "preco":500}
    ];

    $scope.mudou = function(acessorio, isMarcado){
        if(isMarcado){
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        }else{
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
        }
    };

});

angular.module('starter')
.controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state){
    //injetando popup $ionicPopup
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);

    $scope.finalizarPedido = function(){
        $ionicPopup.alert({
            title: "Parabens",
            template: "Você acaba de comprar um carro"
        }).then(function(){
            //quando clicar no "OK" do alert() | funcão de callback
            $state.go('listagem');
        });
    };

});
