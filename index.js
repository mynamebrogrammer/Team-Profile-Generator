const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");

const teamMembers = [];

let manager;

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
    manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptTeam();
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
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the engineer's name?",
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the engineer's employee id?",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineer's email?",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's github username?",
                    },
                ]).then((engineerAnswers) => {
                    console.log(engineerAnswers);
                    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                    teamMembers.push(engineer);
                    promptTeam();
                });
                break;
            case "Intern":
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the intern's name?",
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the intern's employee id?",
                    },
                    { 
                        type: "input",
                        name: "email",
                        message: "What is the intern's email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is the intern's school?",
                    },
                ]).then((internAnswers) => {
                    console.log(internAnswers);
                    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                    teamMembers.push(intern);
                    promptTeam();
                });
                break;
            default:
                console.log(teamMembers);
                const html = generateHTML( teamMembers ) 
                console.log(html)
                fs.mkdir("./dist", { recursive: true }, (err) => {
                    if (err) throw err;
                });

                fs.writeFile("./dist/index.html", html, (err) => {
                    if (err) throw err;
                    console.log("The file has been saved!");
                });
                
        }
    })
}