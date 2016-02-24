(function(module) {
  var login = {};
  var ref = new Firebase('https://blinding-fire-6623.firebaseio.com');
  var userData;

  login.register = function(e) {
    e.preventDefault();
    var $email = $('#register-user-name').val();
    var $password = $('#register-password').val();
    $('#register-form').trigger('reset');

    ref.createUser({
      email: $email,
      password: $password
    }, function(error,userData) {
      if (error) {
        switch (error.code) {

        case 'EMAIL_TAKEN':
          alert('This email is already in use.');
          break;

        case 'INVALID_EMAIL':
          alert('Please enter a valid email.');
          break;
        }
      } else {
        page('/login');
      }
    });
  };

  login.newLogin = function(e) {
    e.preventDefault();
    var $email = $('#login-user-name').val();
    var $password = $('#login-password').val();
    $('#login-form').trigger('reset');

    ref.authWithPassword({
      'email': $email,
      'password': $password
    }, function(error,authData) {
      if (error) {
        alert('Login error');
      } else {
        module.userData = authData;
        page('/home');
      }
    });
  };

  login.chooseLogin = function (e) {
    e.preventDefault();
    page('/login');
  };

  login.chooseRegister = function (e) {
    e.preventDefault();
    page('/register');
  };

  $('#choose-login').on('click',login.chooseLogin);
  $('#choose-register').on('click',login.chooseRegister);

  $('#register').on('click',login.register);

  $('#login').on('click',login.newLogin);


  module.login = login;
})(window);
