/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {

  $.fn.goMobile = function() {
    var baseURL =  location.protocol + "//" + location.hostname + location.pathname;
    window.location.href = baseURL+"?m=1"; // time=" + new Date().getTime() + "&
  };


  $.fn.goDesktop = function() {
    var baseURL =  location.protocol + "//" + location.hostname + location.pathname;
    window.location.href = baseURL+"?m=0";
  };
  
})(jQuery);