(function(module) {
  controller = {};

  controller.landing = function() {
    $('#landing-page').show().siblings().hide();
  };

  controller.login = function() {
    $('#login-page').show().siblings().hide();
  };

  controller.register = function(ctx,next) {
    $('#register-page').show().siblings().hide();
    next();
  };

  controller.homepage = function(ctx,next) {
    $('#homepage').show().siblings().hide();
    next();
  };




  module.controller = controller;
})(window);
