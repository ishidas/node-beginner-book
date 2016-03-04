var exec = require('child_process').exec;

function start (response){
  console.log('Request Handler "start" was called.');

  exec('ls -lah', function (error, stdout, stderr){
    console.log('I am here')
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
};

function upload (){
  console.log('Request Handler "upload" was called.');
  response.writeaHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Upload');
  response.end();
};

exports.start = start;
exports.upload = upload;
