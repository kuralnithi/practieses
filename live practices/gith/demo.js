// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  let R = +userInput[0];

  let c = 0;

  for (i = 0; i < R; i++) {
    let arr = [];

    c = c + 1;

    if (i == 0 || i == 1 || i == R - 1) {
      for (j = 1; j <= c; j++) {
        arr.push(arr.length + 1);
      }
    } else {
      for (j = 1; j <= c; j++) {
        let rem;
        arr.push(arr.length + 1);
        rem = arr.splice(1, arr.length - 2).fill(" ");
        arr.splice(1, arr.length - 2, ...rem);
      }
    }

    if (i == 0 || i == 1 || i == R - 1) console.log(arr.join(""));
    else console.log(arr.join(""));
  }

  //end-here
});
