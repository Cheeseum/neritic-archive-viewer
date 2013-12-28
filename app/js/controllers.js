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

navControllers.controller('PostListCtrl', function ($scope, Post) {
    $scope.posts = Post.query({thread: $scope.thread.id});
});

navControllers.controller('UserListCtrl', function ($scope, User) {
    $scope.users = User.query();
});
