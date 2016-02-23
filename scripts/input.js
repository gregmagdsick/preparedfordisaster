var test;
var userInput = [];
userInput.kitData = function() {
  $.getJSON('data/baseKit.json')
  .done(function(data){
    userInput.all = data;
    userInput.all.forEach(function(ele){
      $('.base-kit').append(userInput.toHtml(ele));
    });
    $('.base-kit').append('<input type="submit" value="submit">');
  });
};

userInput.toHtml = function(ele) {
  var template = Handlebars.compile($('#check-box-template').text());
  return template(ele);
};

$('.base-kit').on('submit', function(e){
  e.preventDefault();
  console.log('yep')
  console.log(e)
  ($('input.user-kit')).map(function(){
    return $(':checkbox:checked').val();
  });
});
