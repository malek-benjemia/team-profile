const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name = '', ID = '', email = '', git='') {
    super(name, ID, email);
    this.git = git ;
  }
};

module.exports = Engineer;