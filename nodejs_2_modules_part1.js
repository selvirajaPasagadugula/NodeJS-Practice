const details = require("./nodejs_2_modules_part2");
const action = require("./nodejs_2_modules_part3");
const data = require("./nodejs_2_modules_part4");
//automatically the function will be called
require("./nodejs_2_modules_part5");

console.log(details);
console.log(action(details.name));
console.log(action(details.id));
console.log(action(details.branch));
console.log(action("sample argument"));
console.log(data);
