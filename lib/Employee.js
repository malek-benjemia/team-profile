class Employee {
    constructor(name = '', ID = '', email = '') {
      this.name = name;
      this.ID = ID;
      this.email = email;
      this.role = 'Employee';
    }
  
    isEmail() {
      if (this.email.includes("@")) {
        return true;
      }
      return false;
    }

    getName() {
      return this.name;
    }

    getID() {
      return this.ID;
    }

    getEmail() {
      return this.email;
    }

    getRole(){
      return this.role;
    };

};

module.exports = Employee;