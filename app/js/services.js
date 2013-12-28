var navServices = angular.module('navServices', ['ngResource']);

function makeJsonpResource($resource, url, opts) {
    var defaultOpts = {
            method: 'JSONP',
            cache: true,
            params: {callback: 'JSON_CALLBACK'},
            transformResponse: function (data) {
                return data.content;
            }
        },
        defaultResource = {
            get: angular.extend({}, defaultOpts, {isArray: false}),
            query: angular.extend({},defaultOpts, {isArray: true})
        },
        u = function (url) {
            var apiUrl = 'http://archive.neritic.net/';
            return apiUrl + url;
        };

    opts = opts || {};
    return $resource(u(url), {}, angular.extend(defaultResource, opts));
}

navServices.factory('Category', function ($resource) {
    return makeJsonpResource($resource, 'categories/:id');
});

navServices.factory('Forum', function ($resource) {
    return makeJsonpResource($resource, 'categories/:category/forums', {
        get: {url: 'forums/:id'}
    });
});

navServices.factory('Thread', function ($resource) {
    return makeJsonpResource($resource, 'forums/:forum/threads', {
        get: {url: 'threads/:id'}
    });
});