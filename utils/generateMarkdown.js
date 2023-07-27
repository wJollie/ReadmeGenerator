// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    github,
    email,
  } = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${licenseBadge}

## Contributing
${contributing}

## Tests
${tests}

## License
This project is licensed under the ${license} License. ${renderLicenseLink(
    license
  )}

## Questions
GitHub: [${github}](https://github.com/${github})
Email: ${email}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check if a license is provided, and return the corresponding badge
  if (license && license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  // If no license is provided or it's "None", return an empty string
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check if a license is provided, and return the corresponding link
  if (license && license !== "None") {
    // Provide the actual URL of the license details or information here
    return `[License Details](https://example.com/license/${license})`;
  }
  // If no license is provided or it's "None", return an empty string
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check if a license is provided, and return the license section
  if (license && license !== "None") {
    return `
## License

This project is licensed under the ${license} License. ${renderLicenseLink(
      license
    )}
`;
  }
  // If no license is provided or it's "None", return an empty string
  return "";
}

module.exports = generateMarkdown;
