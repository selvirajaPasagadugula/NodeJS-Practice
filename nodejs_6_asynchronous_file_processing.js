const { readFile, writeFile } = require("fs");

readFile("./files/file1.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  return;
  const first = result;
  readFile("./files/file2.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    return;
    const second = result;
    writeFile(
      "./files/result-async.txt",
      `Here is the result: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
