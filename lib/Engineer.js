const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, gitHub){

    super(name, id);

    this.gitHub = gitHub;

  }

  getGitHub(){
    return this.gitHub;
  }

  getRole(){
    return 'Engineer';
  }
}

module.exports = Engineer;
