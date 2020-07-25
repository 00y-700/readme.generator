const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const question1 = {
    type: "input",
    message: "What is your Title?",
    name: "Title"
}

inquirer.prompt([
    {
        type: "input",
        message: "What is your Title?",
        name: "title"
    },
    {
        type: "input",
        message: "User Story AS A statement:",
        name: "as"
    },
    {
        type: "input",
        message: "User Story I WANT statement:",
        name: "want"
    },
    {
        type: "input",
        message: "User Story SO THAT statement:",
        name: "that"
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
]).then((response)=>{
    fs.appendFileSync("README.md", "# " + response.title + '\n' + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("TITLE done");
    });
    fs.appendFileSync("README.md", "## " + "User Story:" + '\n' + "* " + "AS A " + response.as + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("AS A done");
    });
    fs.appendFileSync("README.md", "* " + "I WANT " + response.want + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("I WANT done");
    });
    fs.appendFileSync("README.md", "* " + "SO THAT " + response.that + '\n' + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("SO THAT done");
    });
    fs.appendFileSync("README.md", "## " + "Installation Instructions:" + '\n' + "* " + response.instructions + '\n' + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("INST done");
    });
    fs.appendFileSync("README.md", "## " + "Project Description:" + '\n' + "* " + response.description + '\n' + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("DESC done");
    });
    fs.appendFileSync("README.md", "## " + "Contributors:" + '\n' + "* " + response.contributors + '\n' + '\n', function(err) {
        if(err) {
            console.log(err);
        }
        console.log("CONT done");
    });
});
