const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name = '', ID = '', email = '', git='') {
    super(name, ID, email);
    this.git = git ;
    this.role = 'Engineer';
  }
  getGithub() {
    return this.git;
  }
};

module.exports = Engineer;