var neriticArchiveApp = angular.module('neriticArchiveApp', [
    'ngRoute',
    'neriticArchiveControllers',
    'neriticArchiveServices'
]);

neriticArchiveApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            // TODO: routes&templates
        });
    }
]);
