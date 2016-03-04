var exec = require('child_process').exec;

function start (response){
  console.log('Request Handler "start" was called.');
  var body = '<html>' +
  '<head>' +
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />' +
  '</head>' +
  '<body>' +
  '<form action="/upload" method="post">' +
  '<textarea name="text" rows="20" close="60"> </textarea>' +
  '<inout type="submit" value="Submit text" />' +
  '</form>' +
  '</body>' +
  '</html>';

    console.log('I am here')
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(body);
    response.end();
};

function upload (response, postData){
  console.log('Request Handler "upload" was called.');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You\'ve sent: ' + postData);
  response.end();
};

exports.start = start;
exports.upload = upload;
