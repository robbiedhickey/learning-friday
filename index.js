let os = require('os');
let http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Requested processed on host ' + os.hostname());
  res.end();
});

let port = 80;
console.log('Listening on port ' + port);
server.listen(port);
