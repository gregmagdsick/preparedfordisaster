$('#authorize-button').on('click',function() {

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: 'jmcclena94@gmail.com', // sender address
    to: 'jmcclena94@gmail.com', // list of receivers
    subject: 'test1', // Subject line
    text: 'test1', // plaintext body
    html: '' // html body
  };

  var socket = io();
  socket.emit('emailResponse', mailOptions);
});
