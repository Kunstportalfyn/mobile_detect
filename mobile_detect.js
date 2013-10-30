/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {

  $.fn.goMobile = function() {
    setCookie("mobile", true, 365);
    window.location.href = document.URL;
  };


  $.fn.goDesktop = function() {
    setCookie("mobile", false, 365);
    window.location.href = document.URL;
  };
  
  function setCookie(c_name, value, exdays)
  {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }
  
})(jQuery);