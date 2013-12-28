var navApp = angular.module('navApp', [
    'ngRoute',
    'navControllers',
    'navServices'
]);

navApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            // TODO: routes&templates
        });
    }
]);
