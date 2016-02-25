var server = connect()
.use(function (req, res, next) {
  var query;
  var url_parts = url.parse(req.url, true);
  query = url_parts.query;

  var api_key = 'key-ea46ea5ec65f6e1bcba2123190676eee';
  var domain = 'sandbox338cba8fefcc493294229f5699c9acff.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'Excited User <me@sandbox338cba8fefcc493294229f5699c9acff.mailgun.org>',
    to: 'info.preparedfordisaster@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
  if (req.method == 'GET') {
    switch (url_parts.pathname) {
      case '/myplan':
      // do something
      res.end();
      break;
    }
  }
})
.listen(3000);
