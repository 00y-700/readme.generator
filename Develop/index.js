const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is your Title?",
        name: "title"
    },
    {
        type: "input",
        message: "User Story AS A statement:",
        name: "AS A"
    },
    {
        type: "input",
        message: "User Story I WANT statement:",
        name: "I WANT"
    },
    {
        type: "input",
        message: "User Story SO THAT statement:",
        name: "SO THAT"
    },
    {
        type: "input",
        message: "What are your installation instructions?",
        name: "instructions"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description"
    },
    {
        type: "input",
        message: "Who are your contributors?",
        name: "contributors"
    }
]).then(function(data) {
    var filename = "README.md";
// function to write README file

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});

// function to initialize program
function init() {

}

// function call to initialize program
init();
