$('#authorize-button').on('click',function() {

  var mailOptions = {
    from: 'jmcclena94@gmail.com',
    to: 'jmcclena94@gmail.com',
    subject: 'test1',
    text: 'test1',
    html: ''
  };

  var socket = io();
  socket.emit('emailResponse', mailOptions);
});
