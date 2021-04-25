// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//https://img.shields.io/badge/license-MIT-blue
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Badge here](https://img.shields.io/badge/license-${license}-blue)`
  } else {
    return '';
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description - ${data.description}
## Install
you will install dependencies with the command : ${data.install}
`;
}

module.exports = generateMarkdown;
