var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var io = require('socket.io')();

var options = {
    service: 'gmail',
    auth: {
        user: 'info.preparedfordisaster',
        pass: 'Code16Disaster301'
    }
  };
var transporter = nodemailer.createTransport(smtpTransport(options));

io.on('connection', function(socket) {
  socket.on('emailResponse', function (mailOptions) {

    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        // smtpTransport.close(); // shut down the connection pool, no more messages
    });
  });
});
//

  // setup e-mail data with unicode symbols
  // var mailOptions = {
  //   from: 'jmcclena94@gmail.com', // sender address
  //   to: 'jmcclena94@gmail.com', // list of receivers
  //   subject: 'test1', // Subject line
  //   text: 'test1', // plaintext body
  //   html: '' // html body
  // };
  //
  // // send mail with defined transport object
  // transporter.sendMail(mailOptions, function(error, response){
  //     if(error){
  //         console.log(error);
  //     }else{
  //         console.log("Message sent: " + response.message);
  //     }
  //
  //     // if you don't want to use this transport object anymore, uncomment following line
  //     // smtpTransport.close(); // shut down the connection pool, no more messages
  // });
