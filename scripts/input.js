var test;
var userInput = [];
userInput.kitData = function() {
  $.getJSON('data/baseKit.json')
  .done(function(data){
    userInput.all = data;
    userInput.all.forEach(function(ele){
      $('.base-kit').append(userInput.toHtml(ele));
    });
  });
};

userInput.toHtml = function(ele) {
  var template = Handlebars.compile($('#check-box-template').text());
  return template(ele);
};

$('.base-kit').on('submit', function(e){
  e.preventDefault();
  console.log('yes');
  console.log(this);
});
