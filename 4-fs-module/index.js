const fs = require("fs");

const readData = fs.readFileSync("./read.txt","utf-8");

console.log(readData);

const content = "Codelandcs is the best platform"

fs.writeFileSync("./write.txt",content);