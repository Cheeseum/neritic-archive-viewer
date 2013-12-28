var neriticArchiveControllers = angular.module('neriticArchiveControllers', [
    'neriticArchiveServices'
]);

neriticArchiveControllers.controller('PostListCtrl', ['$scope', 'Post', function ($scope, Post) {
    $scope.posts = Post.query({thread: 1});
}]);
