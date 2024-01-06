const clock = () => {
  let currTime = +new Date();

  setInterval(() => {
    currTime += 1000;
    console.log(new Date(currTime).toLocaleString());
  }, 1000);
};

clock();
