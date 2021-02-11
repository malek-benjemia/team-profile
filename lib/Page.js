const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');


class Page {
    constructor() {
        this.employees =[];
    }

    //ask the user for input depending on employee type
    promptUserEmployee(employeeType) {
        let additional='';
        if (employeeType=='manager') {additional='office number'};
        if (employeeType=='engineer') {additional='GitHub name'};
        if (employeeType=='intern') {additional='school'};

        inquirer
        .prompt([
        {
            type: 'text',
            name: 'employeeName',
            message: `What is the ${employeeType} name?`,
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                return false;
                }
            }
        }, 
        {
            type: 'text',
            name: 'ID',
            message: `What is the ${employeeType} ID?`,
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                return false;
                }
            }
        }, 
        {
            type: 'text',
            name: 'email',
            message: `What is the ${employeeType} email?`,
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                return false;
                }
            }
        }, 
        {
            type: 'text',
            name: 'additional',
            message: `What is the ${employeeType} ${additional}?`,
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                return false;
                }
            }
        }]
        )
        .then(({ employeeName,ID,email,additional }) => {
            if (employeeType == 'manager'){
                let manager = new Manager(employeeName, ID, email,additional);
                this.employees.push(manager)
            }
            else if (employeeType == 'engineer'){
                let engineer = new Engineer(employeeName, ID, email,additional);
                this.employees.push(engineer)
            }
            else {
                let intern = new Intern(employeeName, ID, email,additional);
                this.employees.push(intern)
            }

        })
        .then(() => {
            this.promptUserChoice()
            })
        .catch((err) => {console.log(err);})
    }

    //ask the user if the next step is to enter an engineer or an intern
    promptUserChoice () {
        inquirer
        .prompt({
            type: 'checkbox',
            name: 'employee',
            message: 'Select the next employee type or select to finish.',
            choices: ['engineer', 'intern', 'finish'],
            validate: nameInput => {
                if (nameInput.length==1) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        )
        .then(({ employee }) => {
            if (employee == 'engineer') {
                this.promptUserEmployee('engineer');
            }
            if (employee == 'intern') {
                this.promptUserEmployee('intern');;
            }
            if (employee == 'finish') {
                console.log(this.employees);
            }
        });

    }

    initializePage() {
        this.promptUserEmployee('manager');
    }
}

module.exports = Page;
    