var userInput = [];
userInput.kitData = function() {
  $.getJSON('data/baseKit.json')
  .done(function(data){
    userInput.all = data;
    userInput.all.forEach(function(ele){
      $('.base-kit').append(userInput.toHtml(ele, '#check-box-template'));
    });
    $('.base-kit').append('<button type="submit">Submit</button>');
  });
};

userInput.toHtml = function(ele, id) {
  var template = Handlebars.compile($(id).text());
  return template(ele);
};

//
$('#emergenecy-button').on('submit', function(e){
  e.preventDefault();
  $('#emergenecy-button').hide();
  var ele = 'test';
  $('#emergenecy-info').append(userInput.toHtml(ele,'#emergency-contact-template'));
  base64test.handle();
});

$('#emergenecy-info').on('submit', function(e){
  e.preventDefault();
  CurrentUser.all['lovedOnes'] = $('.emer-info').map(function(){
    if(this.value && this.value !== 'submit'){
      var robj = {};
      robj[this.name] = this.value;
      return robj;
    }
  });
  $('#emergenecy-info').hide();
  $('#emergenecy-button').show();
  $('#emergenecy-button').append('<p>'+ CurrentUser.all.lovedOnes[0].firstName + ' added</p>');
});

$('.user-information').on('submit', function(e){
  e.preventDefault();
  $('.user-info').map(function(){
    if(this.value && this.value !== 'submit'){
      CurrentUser.all[this.name] = this.value;
    }
  });
  $('.user-info').val('');
});

$('.base-kit').on('submit', function(e){
  e.preventDefault();
  CurrentUser.all['userKit'] = $(':checkbox:checked').map(function(acc) {
    return this.value;
  });
  $('.base-kit').children('input').removeAttr('checked');
});
