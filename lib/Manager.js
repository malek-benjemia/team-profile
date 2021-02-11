const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '', ID = '', email = '', officeNb='') {
    super(name, ID, email);
    this.officeNb = officeNb ;
    this.type='manager';
  }
};

module.exports = Manager;