(function(module) {

  var api_key = 'key-ea46ea5ec65f6e1bcba2123190676eee';
  var domain = 'sandbox338cba8fefcc493294229f5699c9acff.mailgun.org';
  var mailgun = require(['mailgun-js'])({apiKey: api_key, domain: domain});

  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'serobnic@mail.ru',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

})(window);
