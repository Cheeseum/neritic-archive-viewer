(function (exports, undefined) {
    var baseUrl,
        resourceMap,
        type;

    exports.ub = {
        init: function (options) {
            baseUrl = options.baseUrl;
            type = options.type;
            resourceMap = options.resourceMap;
        },
        get: function () {
            window.wtf = arguments;
            var args = Array.prototype.slice.call(arguments),
                resource = args.shift(),
                pregex = /:\w+/,
                param,
                url = resourceMap[resource];

            if (url === undefined) {
                throw new Error('Resource ' + resource + ' not found in resource map');
            }

            while (url.match(pregex)) {
                param = args.shift();
                if (param === undefined) {
                    throw new Error('Not enough parameters for resource ' + resource);
                }
                url = url.replace(pregex, param);
            }

            if (type === 'jsonp') {
                url += '?callback=JSON_CALLBACK';
            }

            return baseUrl + url;
        }
    };
}(window, void 0));

