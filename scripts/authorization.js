// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '3140915015-h40rmmh8e4vnl2lc11v8m9od9kl7p819.apps.googleusercontent.com';

var SCOPES = ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/gmail.compose', 'https://www.googleapis.com/auth/gmail.send'];

/**
* Check if current user has authorized this application.
*/
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
  }

  /**
  * Handle response from authorization server.
  *
  * @param {Object} authResult Authorization result.
  */
  function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = 'none';
      loadGmailApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = 'inline';
    }
  }

  /**
  * Initiate auth flow in response to user clicking authorize button.
  *
  * @param {Event} event Button click event.
  */
  function handleAuthClick(event) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
      return false;
    }

    /**
    * Load Gmail API client library. List labels once client library
    * is loaded.
    */
    function loadGmailApi() {
      gapi.client.load('gmail', 'v1', sendMessage('me', "hello there", responseData));
    }


    function sendMessage(userId, message, callback) {
      var base64EncodedEmail = btoa(message);
      var request = gapi.client.gmail.users.messages.send({
        'userId': userId,
        'messsage': {
          'raw': base64EncodedEmail
        }
      });
      request.execute(callback);
    }

    function responseData(resp) {
      console.log(resp);
    }
