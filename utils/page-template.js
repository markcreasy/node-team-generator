const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

const generateTeam = teamData => {
  console.log(teamData.filter(team => team.getRole() == 'Manager'));
  console.log(teamData.filter(team => team.getRole() == 'Engineer'));
  console.log(teamData.filter(team => team.getRole() == 'Intern'));

  return `
    <div class="row justify-content-around">
      ${teamData.filter(team => team.getRole() == 'Manager').map( (manager) => {
        return `
        <div class="card-container col-4 p-2">
          <div class="card">
            <div class="card-header text-bg-primary">
              <h5>Manager</h5>
              <h6><i class="bi bi-table"></i> ${manager.name}<h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
      }).join('')
    }
    ${teamData.filter(team => team.getRole() == 'Engineer').map( (engineer) => {
      return `
        <div class="card-container col-4 p-2">
          <div class="card">
            <div class="card-header text-bg-primary">
              <h5>Engineer</h5>
              <h6><i class="bi bi-terminal"></i> ${engineer.name}<h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">GitHub Username: ${engineer.gitHub}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
      }).join('')
    }
    ${teamData.filter(team => team.getRole() == 'Intern').map( (intern) => {
      return `
        <div class="card-container col-4 p-2">
          <div class="card">
            <div class="card-header text-bg-primary">
              <h5>Intern</h5>
              <h6><i class="bi bi-mortarboard-fill"></i> ${intern.name}<h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
      }).join('')
    }`;
};

module.exports = teamData => {

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Site</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/bootstrap-icons.css">
    <!-- <link rel="stylesheet" href="assets/css/style.css"> -->
  </head>

  <body>
    <header class="text-bg-danger">
      <div class="container">
        <h1 class="page-title text-center p-5">My Team</h1>
      </div>
    </header>
    <main class="container py-4">
      <div class="row justify-content-around">
        ${generateTeam(teamData)}
      </div>
    </main>
  </body>
  </html>
  `;
};
