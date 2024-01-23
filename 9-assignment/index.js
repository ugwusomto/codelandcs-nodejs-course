const http = require('http');

const WebServer = http.createServer((req, res) => {
  const route = req.url;
  const pageHeader = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>`;

  const pageFooter = `</body>
  </html>`;

  let content = "";

  if (route == '/about-us') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    content = `<p style="color:green;">We teach people how to code and build a career from it</p>`
  } else if (route == '/contact-us') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    content = `<p style="color:red;">You can reach us through our mail -- <a href="mailto:notifications@codelandcs.com">notifications@codelandcs.com </a></p>`
  } else if (route == '/') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    content = `<h1>Welcome to codelandcs.com</h1>`
  } else {
    res.writeHead(404, ' Not Found ', {
      'content-type': 'text/html',
    });
    content = `<h3>404 Page Not Found</h3>`
  }

  res.end(`${pageHeader} ${content} ${pageFooter}`)
});

WebServer.listen(4000, '127.0.0.1', () => {
  console.log('Our server is listening for request from port 4000');
});
