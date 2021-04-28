const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "What is the title of your project?",
          },
          {
            type: "input",
            name: "description",
            message: "What is your description?",
          },
          {
            type: "input",
            name: "use",
            message: "How would you use this application?",
          },
          {
            type: "list",
            name: "license",
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
          {
            type: "input",
            name: "contributors",
            message: "Who can contribute to the application?"
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
        ]);
      }

function generateREADME(data) {
  return `  
  ## Title of project
  ${data.project_title}

  ## Table of Contents
  - [Professional-Readme-Generator](#professional-readme-generator)
  - [Description](#description)
  - [Table-of-contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Project Description
${data.description}

## Description
${data.description}

## Usage Information
${data.use}

- This is an example of prompts when the application is started:
  ![Answered Questions](/assets/images/beforethealert.PNG "Answered Questions")

- Once all questions are completed an alert is displayed.
  ![Alert](/assets/images/newquestionsanswered.PNG "Alert")

- This is an example of the written file once the program is completed.
  ![Completed File](/assets/images/sample.PNG "Completed File")


## License
${data.license}

## Contributers
${data.contributors}

## Tests

${data.tests}


## Questions
${data.questions}

## Link to video demonstrating the app:
https://vimeo.com/542459918/2e17987741

## Link to GitHub Repo:
https://github.com/polodre/professionalREADMEGenerator#readme

## Link to GitHub pages:
https://polodre.github.io/professionalREADMEGenerator/

Please follow me on Github:
https://github.com/polodre

`;
  
}

promptUser()
  .then(function(data) {
    const readme = generateREADME(data);

 
    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log('✔️  Successfully wrote to README.md');
  })
  .catch(function(err) {
    console.log(err);
  });
