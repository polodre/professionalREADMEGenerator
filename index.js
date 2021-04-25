// when prompted, generate README
// include Title, Description, ToC, installation, usage, license, contributing, tests, questions

// license will have choices
// if license add badge

// questions need github username, link, email

// ToC needs link to section in README


// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
              type: 'input',
              message: 'What is your description?',
              name: 'description',
            },
            {
              type: 'input',
              message: 'How would you install your dependencies?',
                name: 'install',
              default: 'npm install',
            },
            {
              type: 'input',
              message: 'How would you use this application?',
                name: 'usage',
            },
            {
              type: 'list',
              message: 'Choose a license',
                name: 'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
              type: 'input',
              message: 'Who can contribute to the application?',
                name: 'contributers',
            },
            {
              type: 'input',
              message: 'How would you test the application?',
                name: 'tests',
                default: 'npm test'
            },
            {
              type: 'input',
              message: 'Who would you contact if you have questions?',
                name: 'questions',
                
            }
            
        ])
        .then((response) => {
            //console.log(response);
            writeToFile("README.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();
