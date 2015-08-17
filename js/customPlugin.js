/*
* customPlugin v0.0.0
* available under MIT license
* 
* */
(function($) {

    var CustomPlugin = function($el, options) {

        this._defaults = {
            color: '#00d'
        };

        // extend options with instance ones
        this._options = $.extend(true, {}, this._defaults, options);

        // add more options
        this.options = function(options) {
            return (options) ? $.extend(true, this._options, options) : this._options;
        };

        // sample plugin's method
        this.myMethod1 = function() {
            $el.css('color', this._options.color);
        };

    };

    $.fn.customPlugin = function(methodOrOptions) {

        var method = (typeof methodOrOptions === 'string') ? methodOrOptions : undefined;

        function getCustomPlugin() {
            var $el          = $(this);
            var customPlugin = $el.data('customPlugin');

            customPlugins.push(customPlugin);
        }

        function applyMethod(index) {
            var customPlugin = customPlugins[index];

            if (!customPlugin) {
                console.warn('$.customPlugin not instantiated yet');
                console.info(this);
                results.push(undefined);
                return;
            }

            if (typeof customPlugin[method] === 'function') {
                var result = customPlugin[method].apply(customPlugin, args);
                results.push(result);
            } else {
                console.warn('Method \'' + method + '\' not defined in $.customPlugin');
            }
        }

        function init() {
            var $el          = $(this);
            var customPlugin = new CustomPlugin($el, options);

            $el.data('customPlugin', customPlugin);
        }

        if (method) {
            var customPlugins = [];

            this.each(getCustomPlugin);

            var args    = (arguments.length > 1) ? Array.prototype.slice.call(arguments, 1) : undefined;
            var results = [];

            this.each(applyMethod);

            return (results.length > 1) ? results : results[0];
        } else {
            var options = (typeof methodOrOptions === 'object') ? methodOrOptions : undefined;

            return this.each(init);
        }

    };

})(jQuery);