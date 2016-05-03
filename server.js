var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express(),
  nodemailer = require('nodemailer'),
  smtpTransport = require('nodemailer-smtp-transport'),
  server = require('http').createServer(app),
  io = require('socket.io')(server);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

server.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var options = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD
  }
};
var transporter = nodemailer.createTransport(smtpTransport(options));

io.sockets.on('connection', function(socket) {
  socket.on('emailResponse', function (mailOptions) {

    transporter.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
      }else{
        console.log('Message sent: ' + response.message);
      }
    });
  });
});
