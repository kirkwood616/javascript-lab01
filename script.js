let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = true;
let lifeEvents = [
  "I was born in Troy, Michigan",
  "I went to Hope College",
  "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
  "I'm a graduate of a Grand Circus bootcamp",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (const event of lifeEvents) {
  console.log(event);
}

let counter = 0;

while (pineapplePizza) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  //   Math.ceil(Math.random() * 10) works, but is it bad practice and/or incorrect?
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
