// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please provide a description of your project:",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installation instructions?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is the usage information?",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What are the contribution guidelines?",
  },
  {
    type: 'input',
    name: 'tests',
    message: "What are the test instructions?",
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose a license for your project:",
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();