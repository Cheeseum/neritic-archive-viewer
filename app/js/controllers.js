var navControllers = angular.module('navControllers', [
    'navServices'
]);

navControllers.controller('CategoryListCtrl', function ($scope, Category) {
    $scope.categories = Category.query();
});

navControllers.controller('ForumListCtrl', function ($scope, $routeParams, Forum) {
    $scope.categoryId = $routeParams.categoryId;
    $scope.forums = Forum.query({category: $routeParams.categoryId});
});

navControllers.controller('ThreadListCtrl', function ($scope, $routeParams, Thread) {
    $scope.forumId = $routeParams.forumId;
    $scope.threads = Thread.query({forum: $routeParams.forumId});
});

navControllers.controller('PostListCtrl', function ($scope, $routeParams, Post) {
    $scope.threadId = $routeParams.threadId;
    $scope.posts = Post.query({thread: $routeParams.threadId, page: 1});

    $scope.posts.$promise.then(function (response) {
        console.log(response.data.pagination);
    });

});

navControllers.controller('UserListCtrl', function ($scope, User) {
    $scope.users = User.query();
});

navControllers.directive('userData', function(User) {
    return function(scope, element, attrs) {
        scope.user = User.get({id: attrs.userData});
    };
});
