(function(module) {
  controller = {};

  controller.landing = function() {
    login.check();
    $('#landing-page').show().siblings().hide();
  };

  controller.login = function() {
    $('#login-page').show().siblings().hide();
  };

  controller.register = function() {
    $('#register-page').show().siblings().hide();
  };

  controller.homepage = function() {
    login.check();
    $('#homepage').show().siblings().hide();
    CurrentUser.pullData(userData);
  };

  controller.about = function() {
    $('#about-box').show().siblings().hide();
  };

  controller.resources = function() {
    $('#additional-resources').show().siblings().hide();
  };

  controller.plan = function(callback) {
    login.check();
    $('#edit-plan').show().siblings().hide();
    callback;
  };




  module.controller = controller;
})(window);
