var neriticArchiveApp = angular.module('neriticArchiveServices', [
    'ngRoute',
    'neriticArchiveControllers',
    'neriticArchiveServices'
]);

neriticArchiveApp.config(['$routeProvider'],
    function ($routeProvider) {
        $routeProvider.when('/', {
            // TODO: routes&templates
        });
    }
);
