let chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let time = 100;

for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
};