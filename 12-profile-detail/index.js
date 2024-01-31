const http = require('http');
const fs = require('fs');
const url = require("url")

const users = [
  {
    id: 0,
    name: 'John Smith',
    email: 'john.smith@example.com',
    bio: 'Passionate software engineer with a focus on web development.',
    occupation: 'Software Engineer',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    dateOfBirth: '1985-08-10',
  },
  {
    id: 1,
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    bio: 'Data scientist fascinated by the power of data-driven insights.',
    occupation: 'Data Scientist',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    dateOfBirth: '1990-02-18',
  },
  {
    id: 2,
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    bio: 'Experienced graphic designer with a keen eye for detail.',
    occupation: 'Graphic Designer',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    dateOfBirth: '1980-11-25',
  },
  {
    id: 3,
    name: 'Sophia Williams',
    email: 'sophia.williams@example.com',
    bio: 'Passionate educator dedicated to shaping young minds.',
    occupation: 'Teacher',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    dateOfBirth: '1975-04-15',
  },
  {
    id: 4,
    name: 'Daniel Miller',
    email: 'daniel.miller@example.com',
    bio: 'Entrepreneur with a vision for sustainable business practices.',
    occupation: 'Entrepreneur',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    dateOfBirth: '1992-07-03',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    bio: 'Fitness enthusiast and nutrition expert promoting a healthy lifestyle.',
    occupation: 'Nutritionist',
    picture: 'https://randomuser.me/api/portraits/women/6.jpg',
    dateOfBirth: '1988-09-20',
  },
  {
    id: 6,
    name: 'Ryan Taylor',
    email: 'ryan.taylor@example.com',
    bio: 'Passionate photographer capturing moments that tell a story.',
    occupation: 'Photographer',
    picture: 'https://randomuser.me/api/portraits/men/7.jpg',
    dateOfBirth: '1983-12-08',
  },
  {
    id: 7,
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    bio: 'Creative writer exploring the realms of fiction and non-fiction.',
    occupation: 'Writer',
    picture: 'https://randomuser.me/api/portraits/women/8.jpg',
    dateOfBirth: '1995-03-12',
  },
  {
    id: 8,
    name: 'David White',
    email: 'david.white@example.com',
    bio: 'Financial analyst with a knack for numbers and strategic planning.',
    occupation: 'Financial Analyst',
    picture: 'https://randomuser.me/api/portraits/men/9.jpg',
    dateOfBirth: '1987-06-28',
  },
  {
    id: 9,
    name: 'Ava Martinez',
    email: 'ava.martinez@example.com',
    bio: 'Social media influencer promoting a lifestyle of positivity and wellness.',
    occupation: 'Influencer',
    picture: 'https://randomuser.me/api/portraits/women/10.jpg',
    dateOfBirth: '1998-01-05',
  },
];

const profiles = fs.readFileSync(`${__dirname}/template/profiles.html`, 'utf-8');
const profileDetail = fs.readFileSync(`${__dirname}/template/profile-card.html`, 'utf-8');
const userProfile = fs.readFileSync(`${__dirname}/template/profile-detail.html`, 'utf-8');


const replacePlaceHolder = (template, user) => {
  let result = template.replace(/{% PROFILE_ID %}/g, user.id);
  result = result.replace(/{% PROFILE_IMAGE %}/g, user.picture);
  result = result.replace(/{% PROFILE_NAME %}/g, user.name);
  result = result.replace(/{% PROFILE_OCCUPATION %}/g, user.occupation);
  result = result.replace(/{% PROFILE_EMAIL %}/g, user.email);
  result = result.replace(/{% PROFILE_BIO %}/g, user.bio);
  return result;
};

const WebServer = http.createServer((req, res) => {
  const route = req.url;
  const urlDetails = url.parse(route,true);
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
    const userProfilePage = replacePlaceHolder(userProfile , user);
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
