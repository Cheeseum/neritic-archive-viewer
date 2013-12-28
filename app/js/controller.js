/* global ub*/
var neriticArchive = angular.module('neriticArchive', []);

ub.init({
    baseUrl: 'http://archive.neritic.net/',
    type: 'jsonp',
    resourceMap: {
        'categories': 'categories',
        'category': 'categories/:p',
        'forums-by-category': 'categories/:p/forums',
        'forum': 'forums/:p',
        'threads-by-forum': 'forums/:p/threads',
        'thread': 'threads/:p',
        'posts-by-thread': 'threads/:p/posts',
        'users': 'users',
        'user': 'users/:p'
    }
});

neriticArchive.controller('PostListCtrl', function ($scope, $http) {
    $http({
        'method': 'jsonp',
        'url': ub.get('posts-by-thread', 1),
        cache: true
    }).success(function (data) {
        $scope.posts = data.content;
    });
});
