var navApp = angular.module('navApp', [
    'ngRoute',
    'ngAnimate',
    'navControllers',
    'navServices'
]);

navApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/forum-list.html',
            controller: 'IndexCtrl'
        }).
        when('/forum/:forumId', {
            templateUrl: 'partials/thread-list.html',
            controller: 'ThreadListCtrl'
        }).
        when('/thread/:threadId', {
            templateUrl: 'partials/post-list.html',
            controller: 'PostListCtrl'
        });

        // enable on deploy: $locationProvider.html5Mode(true);
    }
]);
