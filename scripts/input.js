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

// $('input:text').focus(function(e){
//   e.preventDefault()},
//   function(){
//       console.log(this)
//     $(this).val('');
//   });
$('.user-information').on('submit', function(e){
  e.preventDefault();
  var inputText = $('.user-info');
  inputText.map(function(acc, cur){
    if(this.value && this.value !== 'submit'){
      test[this.name] = this.value;
    }
  });
});

$('.base-kit').on('submit', function(e){
  e.preventDefault();
  var checkedItems = $(':checkbox:checked');
  checkedItems.map(function() {
    return (this.value);
  });
});
