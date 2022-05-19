const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber){

    super(name, id);

    this.officeNumber = officeNumber;
    this.email = email;

  }

  getRole(){
    return 'Manager';
  }
}

module.exports = Manager;
