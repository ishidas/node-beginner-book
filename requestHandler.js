var exec = require('child_process').exec;

function start (){
  console.log('Request Handler "start" was called.');
  var content = 'empty';

  exec('ls -lah', function (error, stdout, stderr){
    console.log('These are what I need to see :' + error + stdout + stderr);
    content = stdout;
  });
    console.log(content);
    return content;
};

function upload (){
  console.log('Request Handler "upload" was called.');
  return 'Hello Upload'
};

exports.start = start;
exports.upload = upload;
