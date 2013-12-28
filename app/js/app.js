var navApp = angular.module('navApp', [
    'ngRoute',
    'navControllers',
    'navServices'
]);

navApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/thread-list.html'
        }).
        when('/thread/:threadId', {
            templateUrl: 'partials/post-list.html',
            controller: 'PostListCtrl'
        });
    }
]);
