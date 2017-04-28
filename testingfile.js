var request = require('request');


var json = {
	"lessonId": "3",
	"locale": "en-gb",
	"challengeId": null,
	"startLevel": "E",
	"endLevel": "E",
	"timerEnabled": true,
	"questionsList": [{
		"itemId": 997,
		"locale": "enxgb",
		"score": 156,
		"correct": true,
		"hintTaken": false,
		"timeTaken": 4,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 996,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 2,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 993,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 998,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 988,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 969,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 1012,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 961,
		"locale": "enxgb",
		"score": 159,
		"correct": true,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 1017,
		"locale": "enxgb",
		"score": 259,
		"correct": true,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}, {
		"itemId": 1000,
		"locale": "enxgb",
		"score": 0,
		"correct": false,
		"hintTaken": false,
		"timeTaken": 1,
		"solutionTaken": false,
		"passTaken": false,
		"level": "E"
	}],
	"securityHash": "304903ce53b44e1d7201cdb0c2ef0ecb"
}

// https://campus-b90.mangahigh.com/user/30593806/prodigi/3/play
//
// session_b90=i61kjb3mi4fjt2u5tb47bo88f0

var x = {
  headers: {
    'session_b90': 'i61kjb3mi4fjt2u5tb47bo88f0'
  },
  uri: 'https://api-vagrant.mangahigh.com/user/101/prodigi/3/play',
  method: 'post',
  json: json
}

request(x, function (error, response, body){
  console.log("error: " + error)
  console.log("response: ", response)
  console.log("body: ", body)
  // var schoolName = JSON.parse(body).name;
  // console.log(schoolName);
});
