$('#authorize-button').on('click',function() {

  var mailOptions = {
    from: 'info.preparedfordisaster@gmail.com',
    to: CurrentUser.all.email,
    subject: 'Your Emergency Disaster Plan',
    text: '',
    html: $('#homepage-plan').html()
  };

  var socket = io();
  socket.emit('emailResponse', mailOptions);
});
