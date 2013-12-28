var neriticArchive= angular.module('neriticArchive', []);

neriticArchive.controller('PostListCtrl', function ($scope) {
    //TODO: actually retrieve posts from archive
    $scope.posts = [
        {'content': 'some random content'}
    ];
    $scope.butts = "butts"
});
