angular.module('starter')
.controller('ListagemController', function($scope){

    $scope.listaDeCarros = [
        {"nome":"BMW 120i", "preco":70000},
        {"nome":"Onix 1.6"},
        {"nome":"Fiesta 2.0"},
        {"nome":"C3 1.0"},
        {"nome":"Uno Fire"},
        {"nome":"Sentra 2.0"},
        {"nome":"Astra Sedan"},
        {"nome":"Vectra 2.0 Turbo"},
        {"nome":"Hilux 4X4"},
        {"nome":"Montana Cabine Dupla"},
        {"nome":"Outlander 2.4"},
        {"nome":"Fusca 1500"}
    ];

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
