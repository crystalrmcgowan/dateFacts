const moment = require('moment');
const chalk = require('chalk')

let now = moment()
let year = `${now.format("YYYY")}`

console.log('It is ' + (chalk.blue.bold(`${now.format("dddd, MMMM Do YYYY, h:mm:ss a")}`) + '.'))
console.log('It is the ' + (chalk.magenta.bold(`${now.format("DDDo")}`) + ' day of the year.'));
console.log('It is ' + (chalk.green.bold(now.diff(now.startOf('day'), 's')) + ' seconds into the day.'));

if (year.isLeapYear) {
  console.log('It ' + (chalk.red.bold('is') + ' a leap year.'));
} else {
  console.log('It ' + (chalk.red.bold('is not') + ' a leap year.'));
}

if (now.isDST) {
  console.log('It ' + (chalk.greenBright.bold('is') + ' during Daylight Savings Time.'));
} else{
  console.log('It ' + (chalk.greenBright.bold('is not') + ' during Daylight Savings Time.'));
}
