//Loading required Modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);

///    fs.write(fd, Buffer.from(data, options.encoding), callback);
// array of questions for user
const questions = inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: ["BSD-3", "GPL", "MS-PL", "MIT", "OSL-3.0", "W3C"]
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are your instructions for installation?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What what instructions do you have for contributors?"
  },
  {
    type: "input",
    name: "usage",
    message: "Any instructions pertaining to usage?"
  },
  {
    type: "input",
    name: "test",
    message: "Is there any information about testing you would like to provide?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email?"
  }
]);

// function to initialize program
async function init() {
  try {
    const data = await questions;
    const generate = generateMarkdown(data);
    await writeToFile("READ.md", generate);
    console.log("Successfully written to Markdown!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
