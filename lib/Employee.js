class Employee {
    constructor(name = '', ID = '', email = '') {
      this.name = name;
      this.ID = ID;
      this.email = email;
    }
  
    isEmail() {
      if (this.email.includes("@")) {
        return true;
      }
      return false;
    }
};

module.exports = Employee;