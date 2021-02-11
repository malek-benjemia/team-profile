const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '', ID = '', email = '', officeNb='') {
    super(name, ID, email);
    this.officeNb = officeNb ;
    this.role = 'Manager';
  }
  getOfficeNumber() {
    return this.officeNb;
  }
};

module.exports = Manager;