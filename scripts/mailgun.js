(function(module) {

var api_key = 'xxxxxxx';
var domain = 'xxxxxxxx';

var Mailgun = require('mailgun-js');

exports.sendOne = function (locals,callback) {

  console.log(locals);
  var mailgun = new Mailgun({apiKey: api_key,domain:domain});

  var data = {
  from: 'xxxxxx',
  to: 'myemail@hotmail.com',
  subject: 'Hello World',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.message().send(data,function (err,body) {
  if(err) return callback(err);
  console.log('message sent');
  callback(null,body);
  });
};

})(window);
