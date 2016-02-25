(function(module) {

  var userInput = [];
  userInput.kitData = function() {
    $.getJSON('data/baseKit.json')
      .done(function(data) {
        userInput.all = data;
        userInput.all.forEach(function(ele) {
          $('.base-kit').append(userInput.toHtml(ele, '#check-box-template'));
        });
        $('.base-kit').append('<button type="submit">Submit</button>');
      });
  };

  userInput.toHtml = function(ele, id) {
    var template = Handlebars.compile($(id).text());
    return template(ele);
  };

  $('#emergenecy-button').on('submit', function(e) {
    e.preventDefault();
    $('#emergenecy-button').hide();
    $('#emergenecy-info').show().append(userInput.toHtml('', '#emergency-contact-template'));
    base64test.handle();
  });

  $('#rally-button').on('submit', function(e) {
    e.preventDefault();
    $('#rally-button').hide();
    $('#rally-point').show();
  });

  $('#emergenecy-info').on('submit', function(e) {
    e.preventDefault();
    if (!CurrentUser.all.lovedOnes) {
      CurrentUser.all.lovedOnes = [];
    }
    var array = {};
    $('.emer-info').map(function() {
      if (this.value && this.value !== 'submit') {
        array[this.name] = this.value;
      }
    });
    CurrentUser.all.lovedOnes.push(array);
    $('.emer-info').val('');
    $('#emergenecy-info').prepend('<p>' + array.firstName + ' ' + array.lastName + ' added</p>');
    CurrentUser.saveData(userData);
  });

  $('.user-information').on('submit', function(e) {
    e.preventDefault();
    $('.user-info').map(function() {
      if (this.value && this.value !== 'submit') {
        CurrentUser.all[this.name] = this.value;
      }
    });
    $('.user-info').val('');
    CurrentUser.saveData(userData);
  });

  $('.rally-point').on('submit', function(e) {
    e.preventDefault();
    if (!CurrentUser.all.rallyInfo) {
      CurrentUser.all.rallyInfo = [];
    }
    $('.rally-info').map(function() {
      if (this.value && this.value !== 'submit') {
        CurrentUser.all.rallyInfo[this.name] = this.value;
      }
    });
    $('.rally-info').val('');
    CurrentUser.saveData(userData);
  });

  $('.base-kit').on('submit', function(e) {
    e.preventDefault();
    var kitArray = [];
    $(':checkbox:checked').each(function(acc) {
      kitArray.push(this.value);
    });
    CurrentUser.all.userKit = kitArray;
    $('.user-kit').removeAttr('checked');
    CurrentUser.saveData(userData);
  });

  module.userInput = userInput;
}(window));
// 
// var api_key = 'key-ea46ea5ec65f6e1bcba2123190676eee';
// var domain = 'sandbox338cba8fefcc493294229f5699c9acff.mailgun.org';
// // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
// var mailgun = {apiKey: api_key, domain: domain};
//
// var data = {
//   from: 'Excited User <me@sandbox338cba8fefcc493294229f5699c9acff.mailgun.org>',
//   to: 'info.preparedfordisaster@gmail.com',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!'
// };
//
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });
