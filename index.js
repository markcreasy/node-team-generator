const inquirer = require('inquirer');
const {managerPrompts, engineerPrompts, internPrompts} = require('./utils/prompts.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let manager;

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
  getEmployeeInfo('Manager')
    .then(({ name, id, email, officeNumber }) => {
      manager = new Manager(name, id, email, officeNumber);

      nextSteps();
    })
}

function nextSteps(){
  inquirer.prompt({
    type: 'list',
    name: 'selection',
    message: `What would you like to do next?`,
    choices: ['Add an Engineer', 'Add an Intern', new inquirer.Separator(),"I'm done building my team. Generate HTML"],
  }).then(({selection}) => {
    switch (selection) {
      case "Add an Engineer":
        getEmployeeInfo('Engineer').then((results) => {
          console.log(results);
          nextSteps();
        });
        break;
      case "Add an Intern":
        getEmployeeInfo('Intern').then((results) => {
          console.log(results);
          nextSteps();
        });
        break;
      default:
        // generate HMTL
        return;
    }
  });
}

// Display welcom message
console.log("Welcome to the Node-Team-Generator! Let's build your team site...");
launchTeamGenerator();
