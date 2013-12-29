var navApp = angular.module('navApp', [
    'ngRoute',
    'navControllers',
    'navServices'
]);

navApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/category-list.html',
            controller: 'CategoryListCtrl'
        }).
        when('/category/:categoryId', {
            templateUrl: 'partials/forum-list.html',
            controller: 'ForumListCtrl'
        }).
        when('/forum/:forumId', {
            templateUrl: 'partials/thread-list.html',
            controller: 'ThreadListCtrl'
        }).
        when('/thread/:threadId', {
            templateUrl: 'partials/post-list.html',
            controller: 'PostListCtrl'
        });

        $locationProvider.html5Mode(true);
    }
]);
