const { readFileSync, writeFileSync } = require("fs");

const first_file = readFileSync("./files/file1.txt", "utf8");
const second_file = readFileSync("./files/file2.txt", "utf8");

writeFileSync(
  "./files/result-sync.txt",
  `Here is the result:\n${first_file}\n${second_file}\n\n`,
  { flag: "a" }
);
console.log(first_file);
