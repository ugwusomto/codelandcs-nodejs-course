const crypto = require("crypto");
const welcome = "welcome to our node js course"
const randomNumber = crypto.randomBytes(10).toString("hex");

console.log(welcome);
console.log(randomNumber)