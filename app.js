const max = prompt("Enter your maxmimunm number!");

const rand = Math.ceil(Math.random() * max);

let num = prompt(`Guess any number between 1 to ${max}!`);

while (true) {
  if (num == "quit") {
    console.log("User quited");
    break;
  }

  if (num > rand) {
    num = prompt(num + " is greater Guess! Hint: Please guess smaller!");
  } else if (num < rand) {
    num = prompt(num + " is smaller Guess! Hint: Please guess greater");
  } else {
    console.log(num + " is right Guess!");
    break;
  }
}