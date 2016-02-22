(function(module) {
  var login = {};
  var ref = new Firebase("https://blinding-fire-6623.firebaseio.com");
  var userData = [];

  login.register = function(e) {
    e.preventDefault();
    var $email = $('#user-name').val();
    var $password = $('#password').val();
    $('#login-form').trigger('reset');

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
      }
    });
  };

  login.newLogin = function(e) {
    e.preventDefault();
    var $email = $('#user-name').val();
    var $password = $('#password').val();
    $('#login-form').trigger('reset');

    ref.authWithPassword({
      'email': $email,
      'password': $password
    }, function(error,authData) {
      if (error) {
        alert('Login error');
      }
    });
  };
  userData = ref.getAuth();
  
  $('#register').on('click',login.register);
  $('#login').on('click',login.newLogin);

  module.login = login;
})(window);
