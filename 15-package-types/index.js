const http = require('http');
const fs = require('fs');
const url = require('url');
const seedrandom = require('seedrandom');
const replacePlaceHolder = require('./helper/utils');
const users = require('./helper/data');

const profiles = fs.readFileSync(`${__dirname}/template/profiles.html`, 'utf-8');
const profileDetail = fs.readFileSync(`${__dirname}/template/profile-card.html`, 'utf-8');
const userProfile = fs.readFileSync(`${__dirname}/template/profile-detail.html`, 'utf-8');

const randomNumber = seedrandom();
console.log(randomNumber());

const WebServer = http.createServer((req, res) => {
  const route = req.url;
  const urlDetails = url.parse(route, true);
  if (route == '/profiles') {
    let profileCards = users.map((user) => replacePlaceHolder(profileDetail, user));
    profileCards = profileCards.join('');
    const profilePage = profiles.replace(/{% PROFILE_DETAIL %}/g, profileCards);
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    res.end(profilePage);
  } else if (urlDetails.pathname == '/profile-detail') {
    const user = users[urlDetails.query.id];
    const userProfilePage = replacePlaceHolder(userProfile, user);
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    res.end(userProfilePage);
  } else {
    res.writeHead(404, ' Not Found ', {
      'content-type': 'text/html',
    });
    res.end(`Page not found`);
  }
});

WebServer.listen(4000, '127.0.0.1', () => {
  console.log('Our server is listening for request from port 4000');
});
