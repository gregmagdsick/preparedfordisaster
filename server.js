var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express(),
  server = require('http').createServer(app);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

server.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var io = require('socket.io')(server);

var options = {
    service: 'gmail',
    auth: {
        user: 'info.preparedfordisaster',
        pass: 'Code16Disaster301'
    }
  };
var transporter = nodemailer.createTransport(smtpTransport(options));

io.sockets.on('connection', function(socket) {
  socket.on('emailResponse', function (mailOptions) {

    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    });
  });
});
