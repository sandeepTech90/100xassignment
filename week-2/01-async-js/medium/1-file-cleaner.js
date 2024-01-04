const fs = require("fs");

const filepath = `${__dirname}/data.txt`;
fs.readFile(filepath, "utf-8", (err, data) => {
  const trimmed = data
    .split(" ")
    .filter((el) => el !== "")
    .join(" ");
  fs.writeFile(filepath, trimmed, (err) => {});
});
