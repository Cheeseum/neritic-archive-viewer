var neriticArchiveServices = angular.module('neriticArchiveServices', ['ngResource']);

function u (url) {
    var apiUrl = 'http://archive.neritic.net/';
    return apiUrl + url;
}

neriticArchiveServices.factory('Post', ['$resource',
    function ($resource) {
        return $resource(u('threads/:thread/posts'), {}, {
            query: {
                method: 'JSONP',
                cache: true,
                isArray: true,
                params: {callback: 'JSON_CALLBACK'},
                transformResponse: function (data) {
                    return data.content;
                }
            }
        });
    }
]);
