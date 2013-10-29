/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {

  $.fn.goMobile = function() {
    setCookie("mobile", 1, 365);
    window.location = document.URL;
  };


  $.fn.goDesktop = function() {
    setCookie("mobile", 0, 365);
    window.location = document.URL;
  };
  
  function setCookie(c_name, value, exdays)
  {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  }
  
})(jQuery);