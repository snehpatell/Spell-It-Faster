function addtoBoard (name, score) {
  var http = require('http');
  var options = {
      host: 'localhost',
      path: '/',
      port: '3000',
      method: 'POST'
    };
  callback = function(response) {
      var str = ''
      response.on('data', function (chunk) {
        str += chunk;
      });
    
      response.on('end', function () {
        console.log(str);
      });
  }
  var req = http.request(options, callback);
  req.write(Buffer.from('{"user":"'+ name + '","score":'+ score + '}').toString('base64'));
  req.end();
}

addtoBoard("cock", 10000)