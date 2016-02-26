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

  function success(className){
    $(className).append('<p class="success">Submission Successful</p>');
    $('.success').fadeOut(1500);
  }

  $('#emergenecy-button').on('submit', function(e) {
    e.preventDefault();
    $('#emergenecy-button').hide();
    $('#emergenecy-info').show().append(userInput.toHtml('', '#emergency-contact-template'));
  });

  $('#rally-button').on('submit', function(e) {
    e.preventDefault();
    $('#rally-button').hide();
    $('#rally').show();
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
    success('#emergenecy-info');
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
    success('.user-information');
    CurrentUser.saveData(userData);
  });

  $('#rally').hide();
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
    success('.rally-point');
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
    success('.base-kit');
    CurrentUser.saveData(userData);
    window.location = '/home';
  });

  module.userInput = userInput;
}(window));
