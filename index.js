import chalk from 'chalk';
import validator from 'validator';
// import nodemon from 'nodemon';

// console.log(chalk.red.italic.underline.inverse('false'));


//tells us if it is an email or not 
const res = validator.isEmail("riya@riya.com");

//gives true if it is an email and false if it is not
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));