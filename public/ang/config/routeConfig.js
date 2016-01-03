angular.module('cmscApp').config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/pages/list.html',
            controller: 'listPhoneController',
            controllerAs: 'lpc'
        })
        .when('/:phoneSlug', {
            templateUrl: '/pages/detail.html',
            controller: 'detailPhoneController',
            controllerAs: 'dpc'
        })
        .otherwise({
            templateUrl: '/error/404.html'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});