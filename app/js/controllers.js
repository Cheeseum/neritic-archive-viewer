var navControllers = angular.module('navControllers', [
    'navServices'
]);

navControllers.controller('PostListCtrl', function ($scope, Post) {
    $scope.posts = Post.query({thread: 1});
});
