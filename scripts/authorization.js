(function(module) {

  var gmailAPI = {};
  // Your Client ID can be retrieved from your project in the Google
  // Developer Console, https://console.developers.google.com
  var CLIENT_ID = '3140915015-h40rmmh8e4vnl2lc11v8m9od9kl7p819.apps.googleusercontent.com';
  var apiKey = 'AIzaSyAV37ObKQpOAVTkfHT_pU7fz6t5D6fGMXU';
  var SCOPES = ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/gmail.compose', 'https://www.googleapis.com/auth/gmail.send'];

  var messageTemplate = "<p>Hello," + CurrentUser.all[0].firstname + "<br /> Thank you for selecting Preparedness For Disaster as your choice on preparing you for any potential natural threats. Here is the emergency kit plan for you and your family to help safeguard during imes of emergency: </p>";


  gmailAPI.HandleClientLoad = function() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(gmailAPI.checkAuth,1);
  };
  /**
  * Check if current user has authorized this application.
  */
  gmailAPI.checkAuth = function() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, gmailAPI.handleAuthResult);
    };

    /**
    * Handle response from authorization server.
    *
    * @param {Object} authResult Authorization result.
    */
    gmailAPI.handleAuthResult = function(authResult) {
      var authorizeButton = $('#authorize-button');
      if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        gmailAPI.loadGmailApi();
      } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeButton.css("display", "inline");
      }
    };

    /**
    * Initiate auth flow in response to user clicking authorize button.
    *
    * @param {Event} event Button click event.
    */
    gmailAPI.handleAuthClick = function(event) {
      gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        gmailAPI.handleAuthResult);
        return false;
      };

      /**
      * Load Gmail API client library. List labels once client library
      * is loaded.
      */
      gmailAPI.loadGmailApi = function() {
        gapi.client.load('gmail', 'v1', function() {
          var base64EncodedEmail = btoa( "Content-Type: text/html; charset=\"UTF-8\"\n" +
          "MIME-Version: 1.0\n" +
          "Content-Transfer-Encoding: 7bit\n" +
          "to: phillip.d.nguyen23@gmail.com\n" +
          "from: sender@gmail.com\n" +
          "subject: Your Emergency Kit\n\n" +

          messageTemplate
        ).replace(/\+/g, '-').replace(/\//g, '_');
        var request = gapi.client.gmail.users.messages.send({
          'userId': 'info.preparedfordisaster@gmail.com',
          'resource': {
            'raw': base64EncodedEmail
          }
        });
        request.execute(function(resp) {
          console.log(resp);
        });
      });
    };
    gmailAPI.clickSend = function() {
      $('#authorize-button').on('click', function() {
        gmailAPI.handleAuthClick();
      });
    };

    gmailAPI.clickSend();

    module.gmailAPI = gmailAPI;
  })(window);
