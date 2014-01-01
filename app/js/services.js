/*global XBBCODE*/
var navServices = angular.module('navServices', ['ngResource']);

function makeJsonpResource($resource, url, opts) {
    var defaultOpts = {
            method: 'JSONP',
            cache: true,
            params: {callback: 'JSON_CALLBACK'},
            transformResponse: function (data) {
                if (data.pagination) {
                    data.content.pagination = data.pagination;
                }
                return data.content;
            },
            interceptor: {
                response: function (response) {
                    if (response.data.pagination) {
                        response.resource.pagination = response.data.pagination;
                    }
                    return response;
                }
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

navServices.factory('Post', function ($resource) {
    return makeJsonpResource($resource, 'threads/:thread/posts', {
        get: {url: 'posts/:id'}
    });
});

navServices.factory('User', function ($resource) {
    return makeJsonpResource($resource, 'users/:id');
});

navServices.factory('BBCodeParser', function () {
    var parser = new XBBCODE({
        youtube: {
            openTag: function (params, content) {
                content = content.replace(/watch\?v=/, 'embed/');
                return '<iframe width="500" height="300" src="'+content+'" frameborder="0" allowfullscreen>';
            },
            closeTag: function () {
                return '</iframe>';
            }
        },
        spoiler: {
            openTag: function () {
                return '<div class="spoiler">';
            },
            closeTag: function () {
                return '</div>';
            }
        },
        c: 'color'
    });

    return {
        toHtml: function (str) {
            var result = parser.process({
                text: str,
                removeMisalignedTags: false,
                addInLineBreaks: true
            });
            return result.html;
        }
    };
});
