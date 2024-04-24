//your JS code here. If required.
function daysOfAYear(year)
{
	return isLeapYear ? 366 : 365;
}

function isLeapYear (year)
{
	return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (year) => {
  //Write your code here
	console.log(daysOfAYear(year));
 
});
