const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, gitHub){

    super(name, id);

    this.gitHub = gitHub;
    this.email = email;

  }

  getGitHub(){
    return this.gitHub;
  }

  getRole(){
    return 'Engineer';
  }
}

module.exports = Engineer;
