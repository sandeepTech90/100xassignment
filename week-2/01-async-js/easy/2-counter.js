// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var c = 0;
const counter = () => {
  const id = setTimeout(() => {
    c += 1;
    console.log(c);
    counter();
  }, 1000);
  return () => clearTimeout(id);
};

counter();

// (Hint: setTimeout)
