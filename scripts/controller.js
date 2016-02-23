(function(module) {
  controller = {};

  controller.landing = function() {
    $('#landing-page').show().siblings().hide();
  };

  controller.login = function() {
    $('#login-page').show().siblings().hide();
  };

  controller.register = function() {
    $('#register-page').show().siblings().hide();
  };

  controller.homepage = function() {
    $('#homepage').show().siblings().hide();
    CurrentUser.pullData(userData.uid);
  };




  module.controller = controller;
})(window);
