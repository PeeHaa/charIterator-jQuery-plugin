/**
 * jQuery charIterator plugin
 * Loops through all characters in a string in a element and optionally applies an animation (or function) to it
 *
 * jQuery 1.7
 *
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @copyright  Copyright (c) 2012 Pieter Hordijk
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    1.0.0
 */
(function($) {
  $.fn.CharIterator = function(options) {
    var defaults = {
      skipSpaces: false,
      insertBefore: '<span>',
      insertAfter: '</span>'
    };

    var opts = $.extend({}, defaults, options);

    var trim = function(text) {
      return text.replace(/^\s+/g, '').replace(/\s+$/g, '');
    };

    var wrap = function(elem) {
      $(elem).contents().each(function() {
        if(this.nodeType === 1) {
          wrap(this);
        } else if(this.nodeType === 3) {
          $(this).replaceWith($.map(this.nodeValue.split(''), function(c) {
            if (trim(c) != '' || !opts.skipSpaces) {
              return opts.insertBefore + c + opts.insertAfter;
            }
            return c;
          }).join(''));
        }
      });
    }

    return this.each(function() {
      wrap(this);
    });
  };
})(jQuery);