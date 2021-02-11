const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name = '', ID = '', email = '', school='') {
    super(name, ID, email);
    this.school = school ;
    this.role = 'Intern';
  }
  getSchool() {
    return this.school;
  }
};

module.exports = Intern;