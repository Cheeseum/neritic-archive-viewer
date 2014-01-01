var navControllers = angular.module('navControllers', [
    'navServices'
]);

navControllers.controller('IndexCtrl', function ($scope, Category) {
    $scope.categories = Category.query();
});

navControllers.controller('ThreadListCtrl', function ($scope, $routeParams, Thread) {
    $scope.forumId = $routeParams.forumId;
    $scope.threads = Thread.query({forum: $routeParams.forumId});
});

navControllers.controller('PostListCtrl', function ($scope, $routeParams, Post) {
    $scope.threadId = $routeParams.threadId;
    $scope.currentPage = $routeParams.page ? parseInt($routeParams.page) : 0;

    $scope.posts = Post.query({thread: $routeParams.threadId, page: $scope.currentPage});
    $scope.posts.$promise.then(function (response) {
        $scope.pages = response.data.pagination;
    });
});

navControllers.controller('UserListCtrl', function ($scope, User) {
    $scope.users = User.query();
});

navControllers.directive('forumsByCategory', function (Category, Forum) {
    return function (scope, element, attrs) {
        scope.forums = Forum.query({category: attrs.forumsByCategory});
    };
});

navControllers.directive('userData', function (User) {
    return function($scope, element, attrs) {
        $scope.user = User.get({id: attrs.userData});
    };
});

navControllers.directive('bbCode', function (BBCodeParser) {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, element) {
            $scope.$watch(element, function () {
                var content = BBCodeParser.toHtml(element.text().trim());
                element.html('').append(content);
            });
        }
    };
});

navControllers.directive('buttonHref', function ($location) {
    return {
        link: function (scope, element, attrs) {
            element.on('click', function () {
                scope.$apply(function() {
                    $location.path(attrs.buttonHref);
                });
            });
        }
    }
});
