var test = {};
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


$('.user-information').on('submit', function(e){
  e.preventDefault();
  var inputText = $('.user-info');
  inputText.map(function(acc, cur){
    if(this.value && this.value !== 'submit'){
      CurrentUser.all[this.name] = this.value;
    }
  });
});

$('.base-kit').on('submit', function(e){
  e.preventDefault();
  var checkedItems = $(':checkbox:checked');
  CurrentUser.all['userKit'] = checkedItems.map(function(acc) {
    return this.value;
  });
});
