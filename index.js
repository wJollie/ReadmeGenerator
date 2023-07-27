// index.js
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown"); // Assuming the generateMarkdown.js is in the same directory

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);

  fs.writeFile(fileName, content, (err) => {
    if (err) throw err;
    console.log("README.md generated successfully!");
  });
}

// TODO: Create a function to initialize app
async function init() {
  const inquirer = (await import("inquirer")).default; // Use dynamic import to get inquirer

  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", answers);
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    });
}

// Function call to initialize app
init();
