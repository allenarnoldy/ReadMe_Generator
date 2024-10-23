// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Whats the title of the ReadMe:",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a Description:",
  },
  {
    type: "input",
    name: "install",
    message: "Please provide instalation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidlines:",
  },
  {
    type: "input",
    name: "testing",
    message: "Please provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license:",
    choices: ["MIT", "BSD 3-Clause", "Apache 2.0", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your Email:",
  },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
  fs.writeFile(README, data, (err) =>
    err ? console.error(err) : console.log("A SAMPLE.md was created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdown = generateMarkdown(responses);
    writeToFile("SAMPLE.md", markdown);
  });
}

// Function call to initialize app
init();
