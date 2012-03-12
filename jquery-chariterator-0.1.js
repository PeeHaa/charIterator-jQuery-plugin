/**
 * jQuery charIterator plugin
 * Loops through all characters in a string in a element and optionally applies an animation (or function) to it
 *
 * jQuery 1.7 (jQuery UI 1.8 is needed optionally for animations)
 *
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @website    https://github.com/PeeHaa/charIterator-jQuery-plugin
 * @copyright  Copyright (c) 2012 Pieter Hordijk
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    1.0.0
 */
(function($) {
  $.fn.charIterator = function(options) {
    var defaults = {
      skipSpaces: true,
      insertBefore: '',
      insertAfter: '',
      animation: function() { },
      loop: true,
      timeout: 200
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
              return opts.insertBefore + '<span class="charIterator-wrap">' + c + '</span>' + opts.insertAfter;
            }
            return c;
          }).join(''));
        }
      });
    };

    var animate = function(elem) {
      var timeTillNextIteration = opts.timeout;
      $('.charIterator-wrap', elem).each(function() {
        var theElem = this;
        setTimeout(function(){
          opts.animation(theElem);
        }, timeTillNextIteration)
        timeTillNextIteration += opts.timeout;
      });

      if (opts.loop === true || (opts.loop !== false && opts.loop > 1)) {
        if (opts.loop !== true) opts.loop = opts.loop - 1;
        setTimeout(function(){
          animate(elem);
        }, timeTillNextIteration);
      }
    };

    return this.each(function() {
      wrap(this);
      animate(this);
    });
  };
})(jQuery);