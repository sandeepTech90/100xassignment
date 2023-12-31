// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

var c = 0;
const counter = (limit = 10) => {
  var id = setInterval(() => {
    c += 1;
    console.log(c);
    if (c == limit) {
      clearInterval(id);
    }
  }, 1000);

  //   return () => {
  //     console.log("clearing");
  //     clearInterval(id);
  //   };
};

counter();
