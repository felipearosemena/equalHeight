/*

  equalHeight.js

  Make heights match in a set of matching elements

  Author: Felipe Arosemena
  Date: 12 Nov 2014

  Usage: $('.el').equalHeight();

*/

(function($) {
  $.fn.extend({

    equalHeight: function(options) {
    
      var els    = this,
          opt    = $.extend({
                      stopAt: false
                    },options);

      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) { func.apply(context, args); }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) { func.apply(context, args); } 
        };
      }

      var setHeight = function(){
        
        var groups = {};

        els.each(function(){
          
          var $this  = $(this),
              data   = $this.attr('data-equal-height'),
              height = $this.css('height','auto').outerHeight();

          if(groups.hasOwnProperty(data)){
            groups[data].count += 1;
            if(height > groups[data].maxH) {
              groups[data].maxH = height;
            }

          } else {
            groups[data] = {};
            groups[data].count = 1;
            groups[data].maxH  = height;
          }

        });

        els.each(function(){
            
          var $this = $(this);
          $.each(groups,function(k,v){
            $this.filter('[data-equal-height="'+k+'"]').css('height',groups[k].maxH);
          });
            
        });
      };

      var debouncedSetHeight = debounce(setHeight,0);

      setHeight();

      $(window).on('resize',debouncedSetHeight);

    }

  });
})(jQuery);

