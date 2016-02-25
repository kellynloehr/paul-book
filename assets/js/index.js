/**
 * Main JS file for Landscape behaviours
 */var hbs = require('express-hbs'),
  api = require('./core/server/api'),
  _ = require('lodash'),
  async = require('express-hbs/lib/async'), // To redefine `registerAsyncHelper`
  registerAsyncHelper;

// Redefine `registerAsyncHelper` from `express-hbs`
registerAsyncHelper = function(name, fn) {
  hbs.handlebars.registerHelper(name, function(context, options) {
    // Pass `[context, options]` as arg instead of `context` only
    return async.resolve(fn.bind(this), [context, options]);
  });
};

module.exports = function() {

  // {{#by_tag}} Helper
  //
  // Example:
  // {{#by_tag 'dev,prod' limit=3}}
  //    {{#foreach posts}}
  //        {{title}}
  //        {{content}}
  //    {{/foreach}}
  // {{/by_tag}}
  //
  // TODO `page` or smth like this functionality
  //
  registerAsyncHelper('by_tag', function(context_data, callback) {
    var context = context_data[0], // get context and options passed from context_data array
      options = context_data[1],
      parameters = (options || {}).hash || {},
      request = {
        context: {
          internal: true
        }
      };

    var tags = (context || '').split(',');
    _.each(tags, function(tag, i) {
      tags[i] = 'tag:' + tags[i];
    });
    if (tags.length > 0) {
      request.filter = tags.join(',');
    }

    if (parameters.hasOwnProperty('limit')) {
      request.limit = parameters.limit
    }

    return api.posts.browse(request).then(function(responce) {
      var data;
      if (options !== undefined && typeof options.fn === 'function') {
        data = hbs.handlebars.createFrame(options.data || {});
        data.posts = responce.posts;
        data.pagination = {
          page: 1,
          prev: 0,
          next: 0,
          pages: 1,
          total: request.limit || 100,
          limit: request.limit || 100
        };
        callback(options.fn(data))
      } else {
        callback('')
      }
    });
  });
};

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function landscapeFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        landscapeFullImg();
        $(window).smartresize(landscapeFullImg);

    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');












