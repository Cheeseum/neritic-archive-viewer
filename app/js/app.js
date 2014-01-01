var navApp = angular.module('navApp', [
    'ngRoute',
    'ngAnimate',
    'navControllers',
    'navServices',
    'angularMoment'
]);

navApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/forum-list.html',
            controller: 'IndexCtrl'
        }).
        when('/forum/:forumId/:page?', {
            templateUrl: 'partials/thread-list.html',
            controller: 'ThreadListCtrl'
        }).
        when('/thread/:threadId/:page?', {
            templateUrl: 'partials/post-list.html',
            controller: 'PostListCtrl'
        });
        // enable on deploy: $locationProvider.html5Mode(true);
    }
]);
