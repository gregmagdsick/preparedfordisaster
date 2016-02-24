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

  controller.about = function() {
    $('#about-box').show().siblings().hide();
  };

  controller.resources = function() {
    $('#additional-resources').show().siblings().hide();
  };

  controller.plan = function() {
    $('#edit-plan').show().siblings().hide();
  };




  module.controller = controller;
})(window);
