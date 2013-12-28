var neriticArchiveServices = angular.module('neriticArchiveServices', ['ngResource']),
    apiUrl = 'http://archive.neritic.net/';

neriticArchiveServices.factory('Post', ['$resource',
    function ($resource) {
        return $resource(apiUrl + 'threads/:id/posts', {}, {
            jsonpquery: {
                method: 'JSONP',
                params: {id: '@thread', callback: 'JSONP_CALLBACK'},
                isArray: true
            }
        });
    }
]);
