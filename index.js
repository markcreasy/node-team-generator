const inquirer = require('inquirer');
const {managerPrompts, engineerPrompts, internPrompts} = require('./utils/prompts.js');
const generateHTML = require('./utils/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let employees = [];

function getEmployeeInfo(role = "employee"){

  let prompts = [];

  switch (role) {
    case "Manager":
      console.log("Please enter manager information...");
      prompts = managerPrompts();
      break;
    case "Engineer":
      console.log("Please enter Engineer information...");
      prompts = engineerPrompts();
      break;
    case "Intern":
      console.log("Please enter Intern information...");
      prompts = internPrompts();
      break;
    default:
      console.log("Regular Employee");
      break;
  }

  return inquirer.prompt(prompts);
}

function launchTeamGenerator(){
  return getEmployeeInfo('Manager')
    .then(({ name, id, email, officeNumber }) => {
      employees.push(new Manager(name, id, email, officeNumber));
    })
}

function nextSteps(){
  return inquirer.prompt({

    type: 'list',
    name: 'selection',
    message: `What would you like to do next?`,
    choices: ['Add an Engineer', 'Add an Intern', new inquirer.Separator(),"I'm done building my team. Generate HTML"],

  }).then(({selection}) => {
    switch (selection) {

      case "Add an Engineer":
        return getEmployeeInfo('Engineer').then(({name, id, email, gitHubUserName}) => {
          employees.push(new Engineer(name, id, email, gitHubUserName));
          return nextSteps();
        });
        break;

      case "Add an Intern":
        return getEmployeeInfo('Intern').then(({name, id, email, school}) => {
          employees.push(new Intern(name, id, email, school));
          return nextSteps();
        });
        break;

      default:
        // user ended team builder
        return;
    }

  });
}

// Display welcome message
console.log("Welcome to the Node-Team-Generator!");
console.log("Let's build your team site...");
launchTeamGenerator()
  .then(nextSteps)
  .then(() => generateHTML(employees))

  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  .catch(err => {
    console.log(err);
  });;
