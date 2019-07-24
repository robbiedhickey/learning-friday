let os = require('os');
let http = require('http');

let server = http.createServer((req, res) => {

  console.log('Received http request for ' + req.url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Request processed on host ' + os.hostname());
  res.end();
});

// allow env to override default port
let port = process.env.APP_PORT || 80;

// simulate application startup delay
console.log('Application starting up...')

server.listen(port, () => {
  console.log('Application listening on port ' + port);
});