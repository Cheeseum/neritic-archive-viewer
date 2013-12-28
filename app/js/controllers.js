var navControllers = angular.module('navControllers', [
    'navServices'
]);

navControllers.controller('CategoryListCtrl', function ($scope, Category) {
    $scope.categories = Category.query();
});

navControllers.controller('ForumListCtrl', function ($scope, Forum) {
    $scope.forums = Forum.query({category: $scope.category.id});
});

navControllers.controller('ThreadListCtrl', function ($scope, Thread) {
    $scope.threads = Thread.query({forum: $scope.forum.id});
});

navControllers.controller('PostListCtrl', function ($scope, $routeParams, Post) {
    $scope.threadId = $routeParams.threadId;
    $scope.posts = Post.query({thread: $routeParams.threadId});
});

navControllers.controller('UserListCtrl', function ($scope, User) {
    $scope.users = User.query();
});
