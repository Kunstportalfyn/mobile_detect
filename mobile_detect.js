/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {

  $.fn.goMobile = function() {
    setCookie("mobile", true, 365);
    var baseURL =  location.protocol + "//" + location.hostname + location.pathname;
    window.location.href = baseURL+"?m=1"; // time=" + new Date().getTime() + "&
  };


  $.fn.goDesktop = function() {
    setCookie("mobile", false, 365);
    var baseURL =  location.protocol + "//" + location.hostname + location.pathname;
    window.location.href = baseURL+"?m=0";
  };
  
  function setCookie(c_name, value, exdays)
  {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }
  
})(jQuery);