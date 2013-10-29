/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {

  $.fn.goMobile = function() {
    $.post(Drupal.settings.basePath + '/frontpage', {mobile: 1}, function() {

      window.location = document.URL;
    });

  };


  $.fn.goDesktop = function() {
    $.post(Drupal.settings.basePath + '/frontpage', {mobile: 0}, function() {

      window.location = document.URL;
      
    });
  };
})(jQuery);