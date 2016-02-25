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

  userInput.planData = function() {
    console.log(CurrentUser.all);
    $('#edit-plan').prepend(userInput.toHtml(CurrentUser.all, '#personal-info'));
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
