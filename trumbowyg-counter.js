/* ===========================================================
 Trumbowyg counter plugin
 * ===========================================================
 * Author : Pawel Janicki
 *          http://paweljanicki.info
 * License: MIT
 */

(function ($) {
  'use strict';

  function initializeCounter(trumbowyg) {
    $(trumbowyg.$box).append('<span id="trumbowyg-counter" style="position: absolute; bottom: 0; right: 0;"></span>');

    $(trumbowyg.$ed).on('tbwchange tbwpaste', function() {
      $('#trumbowyg-counter').text($(trumbowyg.$ed).text().length);
    });
  }

  $.extend(true, $.trumbowyg, {
    plugins: {
      counter: {
        init: function (trumbowyg) {
          setTimeout(function() {
            initializeCounter(trumbowyg);
          });
        }
      }
    }
  });
})(jQuery);