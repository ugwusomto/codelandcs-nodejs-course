const http = require('http');

const WebServer = http.createServer((req, res) => {
  const route = req.url;
  if (route == '/about-us') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    res.end('<p>We teach people how to code and build a career from it</p>');
  } else if (route == '/contact-us') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    res.end('<p>You can reach us through our mail -- notifications@codelandcs.com</p>');
  } else if (route == '/') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    res.end('<h1>Welcome to codelandcs.com</h1>');
  } else {
    res.writeHead(404, ' Not Found ', {
      'content-type': 'text/html',
    });
    res.end('<h3>404 Page Not Found</h3>');
  }
});

WebServer.listen(4000, '127.0.0.1', () => {
  console.log('Our server is listening for request from port 4000');
});
