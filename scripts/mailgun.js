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


//
//  public static ClientResponse SendSimpleMessage() {
//        Client client = Client.create();
//        client.addFilter(new HTTPBasicAuthFilter("api",
//                        "key-ea46ea5ec65f6e1bcba2123190676eee"));
//        WebResource webResource =
//                client.resource("https://api.mailgun.net/v3/sandbox338cba8fefcc493294229f5699c9acff.mailgun.org" +
//                                "/messages");
//        MultivaluedMapImpl formData = new MultivaluedMapImpl();
//        formData.add("from", "Excited User <mailgun@sandbox338cba8fefcc493294229f5699c9acff.mailgun.org>");
//        formData.add("to", "info.preparedfordisaster@gmail.com");
//        formData.add("to", "mailgun@sandbox338cba8fefcc493294229f5699c9acff.mailgun.org");
//        formData.add("subject", "Hello");
//        formData.add("text", "Testing some Mailgun awesomness!");
//        return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
//                post(ClientResponse.class, formData);
// }
