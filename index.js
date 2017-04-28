var Alexa = require('alexa-sdk');
var request = require('request');

exports.handler = function(event, context, callback){
  var alexa_one = Alexa.handler(event, context);
  alexa_one.registerHandlers(handlers);
  // alexa_one.appId = APP_ID;
  alexa_one.execute();
};

var handlers =  {

  "LaunchRequest": function() {
    var alexa = this;
    request('https://api-b90.mangahigh.com/institution/24', function (error, response, body){
      var schoolName = JSON.parse(body).name;
      alexa.emit(':tell', 'Say ' + schoolName);
    });
  }
};
