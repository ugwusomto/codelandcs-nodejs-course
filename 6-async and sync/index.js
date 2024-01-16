const fs = require('fs');

console.log('File reading just started');

fs.readFile('./read-file.txt', 'utf-8', (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(content);
  }
});

console.log("File reading still in progress...");

const aboutMe = ``;

// Write a code to write to the file --- write-file.txt
