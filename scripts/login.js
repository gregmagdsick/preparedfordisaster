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
        login.index();
        // page('/home');
      }
    });
  };

  login.newLogin = function(e) {
    e.preventDefault();
    console.log('here');
    var $email = $('#login-user-name').val();
    var $password = $('#login-password').val();
    console.log('here');
    $('#login-form').trigger('reset');
    console.log('here');

    ref.authWithPassword({
      'email': $email,
      'password': $password
    }, function(error,authData) {
      if (error) {
        alert('Login error');
      } else {
        userData = authData;
        module.userData = userData;
        console.log(userData);
        login.index();
        // page('/home');
      }
    });
  };

  login.index = function() {
    page('/home');
  };

  $('#register').on('click',login.register);

  $('#login').on('click',login.newLogin);


  module.login = login;
})(window);
