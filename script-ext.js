let hours = 50;
let wage = 10;
let payCheck;

if (hours <= 40) {
  payCheck = hours * wage;
  console.log(`Total Paycheck: $${payCheck}`);
} else {
  let regTime = wage * 40;
  let overTime = (hours - 40) * (wage * 1.5);
  payCheck = regTime + overTime;
  console.log(`Total Paycheck: $${payCheck}`);
}

let weeks = Math.ceil(1000000 / payCheck);
console.log(`It will take you ${weeks} weeks to earn $1,000,000.`);
