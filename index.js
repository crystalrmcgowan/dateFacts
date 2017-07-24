const moment = require('moment');
const chalk = require('chalk')

var now = moment()
let year = `${now.format("YYYY")}`
let midnight= `${now.startOf('day').format("s")}`
let currentSecond = `${moment().format("s")}`

console.log('It is ' + (chalk.blue.bold(`${now.format("dddd, MMMM Do YYYY, h:mm:ss a")}`) + '.'))
console.log('It is the ' + (chalk.magenta.bold(`${now.format("DDDo")}`) + ' day of the year.'));
console.log('It is ' + (chalk.green.bold(moment().diff(moment().startOf('day'), 's')) + ' seconds into the day.'));

if (year.isLeapYear === true) {
  console.log('It ' + (chalk.red.bold('is ') + ' a leap year.'));
} else {
  console.log('It ' + (chalk.red.bold('is not') + ' a leap year.'));
}

if (now.isDST() === true) {
  console.log('It ' + (chalk.greenBright.bold('is') + ' during Daylight Savings Time.'));
} else{
  console.log('It ' + (chalk.greenBright.bold('is not') + ' during Daylight Savings Time.'));
}
