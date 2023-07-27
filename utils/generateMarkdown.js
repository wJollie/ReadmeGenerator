// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check if a license is provided, and return the corresponding badge
  if (license) {
    // Replace 'MIT' with the actual name of the license badge image file
    return `![MIT](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  // If no license is provided, return an empty string
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check if a license is provided, and return the corresponding link
  if (license) {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  // If no license is provided, return an empty string
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check if a license is provided, and return the license section
  if (license) {
    return `
## License

This project is licensed under the ${license} License. ${renderLicenseLink(
      license
    )}
    `;
  }
  // If no license is provided, return an empty string
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
