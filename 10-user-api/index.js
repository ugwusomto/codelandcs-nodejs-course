const http = require('http');

const users = [
  {
    name: 'John Smith',
    email: 'john.smith@example.com',
    bio: 'Passionate software engineer with a focus on web development.',
    occupation: 'Software Engineer',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    dateOfBirth: '1985-08-10',
  },
  {
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    bio: 'Data scientist fascinated by the power of data-driven insights.',
    occupation: 'Data Scientist',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    dateOfBirth: '1990-02-18',
  },
  {
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    bio: 'Experienced graphic designer with a keen eye for detail.',
    occupation: 'Graphic Designer',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    dateOfBirth: '1980-11-25',
  },
  {
    name: 'Sophia Williams',
    email: 'sophia.williams@example.com',
    bio: 'Passionate educator dedicated to shaping young minds.',
    occupation: 'Teacher',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    dateOfBirth: '1975-04-15',
  },
  {
    name: 'Daniel Miller',
    email: 'daniel.miller@example.com',
    bio: 'Entrepreneur with a vision for sustainable business practices.',
    occupation: 'Entrepreneur',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    dateOfBirth: '1992-07-03',
  },
  {
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    bio: 'Fitness enthusiast and nutrition expert promoting a healthy lifestyle.',
    occupation: 'Nutritionist',
    picture: 'https://randomuser.me/api/portraits/women/6.jpg',
    dateOfBirth: '1988-09-20',
  },
  {
    name: 'Ryan Taylor',
    email: 'ryan.taylor@example.com',
    bio: 'Passionate photographer capturing moments that tell a story.',
    occupation: 'Photographer',
    picture: 'https://randomuser.me/api/portraits/men/7.jpg',
    dateOfBirth: '1983-12-08',
  },
  {
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    bio: 'Creative writer exploring the realms of fiction and non-fiction.',
    occupation: 'Writer',
    picture: 'https://randomuser.me/api/portraits/women/8.jpg',
    dateOfBirth: '1995-03-12',
  },
  {
    name: 'David White',
    email: 'david.white@example.com',
    bio: 'Financial analyst with a knack for numbers and strategic planning.',
    occupation: 'Financial Analyst',
    picture: 'https://randomuser.me/api/portraits/men/9.jpg',
    dateOfBirth: '1987-06-28',
  },
  {
    name: 'Ava Martinez',
    email: 'ava.martinez@example.com',
    bio: 'Social media influencer promoting a lifestyle of positivity and wellness.',
    occupation: 'Influencer',
    picture: 'https://randomuser.me/api/portraits/women/10.jpg',
    dateOfBirth: '1998-01-05',
  },
];

const WebServer = http.createServer((req, res) => {
  const route = req.url;
  if (route == '/api') {
    res.writeHead(200, ' Success ', {
      'content-type': 'text/html',
    });
    res.end(JSON.stringify({users}));
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