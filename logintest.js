var request = require('request');

var json = {
  schoolId: 10,
  studentId: 1,
  password: "password"
}

var x = {
  headers: {
    'user-agent': 'alexa'
  },
  uri: 'https://api-vagrant.mangahigh.com/auth',
  method: 'post',
  json: json
}



request(x, function (error, response, body){
  // console.log("error: " + error)
  // console.log("response: ", response)
  // console.log("body: ", body)
  var sessionId = body.id;
  console.log(sessionId);
  var y = {
    headers: {
      'cookie': 'session_development='+sessionId,
      'user-agent': 'alexa'
    },
    uri: 'https://api-vagrant.mangahigh.com/user/101',
    method: 'get'
  }


  request(y, function (error, response, body){
    console.log(body);

    var z = {
      headers: {
        'cookie': 'session_development='+sessionId,
        'user-agent': 'alexa'
      },
      uri: 'https://api-vagrant.mangahigh.com/user/101/game/21/play',
      method: 'post',
      json: {
        level: 2
      }
    }
    request(z, function (error, response, body){
      playId = body.gamePlayId;

      var a = {
        headers: {
          'cookie': 'session_development='+sessionId,
          'user-agent': 'alexa'
        },
        uri: 'https://api-vagrant.mangahigh.com/user/101/game/21/play/' + playId,
        method: 'put',
        json: {
          settings: {},
          balance: 0,
          gameData: {},
          assets: [],
          score: 3,
          timePlayed: 10,
          level: 2,
          action: 'update',
          achievements: []
        }
      }
      request(a, function (error, response, body){
        console.log(body);
    });
    });
  });

});
