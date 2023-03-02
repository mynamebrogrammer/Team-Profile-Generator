const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id", 
    message: "What is the team manager's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
]).then((answers) => {
    console.log(answers);
});

function promptTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the team member's role that you would like to add?",
            choices: ["Engineer", "Intern", "Finish building my team"]
        },
    ]).then((addMemberAnswers) => {
        switch (addMemberAnswers.role) {
            case "Engineer":

        }
    })
}