#!/usr/bin/env node
// shabang command

const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const inquirer = require('inquirer');
const log = console.log
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword")

let len = 8
inquirer
.prompt({
  type:"list",
  name:"length",
  message:"Length of password: ",
  choices:["10","20","30","40","50","60","70"]
})
.then((answer)=>{
  len = answer.length
  password()
 console.log("Answer: ",answer.length)
})


function password(){
  program.version("1.0.0").description("Simple Password Generator")



  program
  .option("-l, --length <number>", "length of password",len)
  .option("-s, --save", "save password")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols",)
  .parse()
  
  
  const {length,save,numbers,symbols} = program.opts()
  log(program.opts())
  
  // Get generated password
  const generatedPassword = createPassword(length,numbers,symbols)
  
  
  // Save to file
  if(save) {
    savePassword(generatedPassword)
  }
  
  //Copy to clipboard
  clipboardy.writeSync(generatedPassword)
  
  
  // Output generated password
  log(chalk.blue("Generated Password: ")+chalk.bold(generatedPassword))
  log(chalk.yellow("Password copied to clipboard")) 
  
}





// EXTRA

// program.command('generate').action(()=>{
//     console.log("Generated")
// }).parse()
// console.log(process.argv)
// window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};
// ga.l=+new Date; ga('create', 'UA-55762617-15', 'auto'); 
// ga('send', 'pageview', {title: 'Commander.js'});


// npm link 
// npm unlink