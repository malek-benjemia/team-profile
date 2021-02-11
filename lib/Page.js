const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');


class Page {
    constructor() {
        this.manager =[];
        this.engineers =[];
        this.interns =[];
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
                this.manager.push(manager)
            }
            else if (employeeType == 'engineer'){
                let engineer = new Engineer(employeeName, ID, email,additional);
                this.engineers.push(engineer)
            }
            else {
                let intern = new Intern(employeeName, ID, email,additional);
                this.interns.push(intern)
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
                this.generatePage(this.manager, this.engineers, this.interns);
            }
        });

    }

    //create a function to generate HTML page
    generatePage(manager, engineers, interns) {
        let header = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="./assets/css/style.css" />
                <title>Team Profile</title>
        </head>
        <body>
        <main>`
        let topText = "<h1>The team members contact information</h1></br>";
        let managerText = "<h2>The Manager</h2></br><div>The manager name: " +manager[0].name+ "</br>The manager ID: "+manager[0].ID+"</br>The manager email: "+"<a href='mailto://"+manager[0].email+"'>"+manager[0].email+"</a>"+"</br>The manager office number: "+manager[0].officeNb+"</div></br>";
        let engineersText = "<h2>The Engineers</h2></br>";
        for (var i = 0; i < engineers.length; i++)  {
            engineersText=engineersText+ "<div>The engineer name: " +engineers[i].name+ "</br>The engineer ID: "+engineers[i].ID+"</br>The engineer email: "+"<a href='mailto://"+engineers[i].email+"'>"+engineers[i].email+"</a>"+"</br>The engineer GitHub: <a href='https://github.com/"+engineers[i].git+"'>"+engineers[i].git+"</a></div></br>"
          };
        let internsText = "<h2>The Interns</h2></br>";
        for (var i = 0; i < interns.length; i++)  {
              internsText=internsText+ "<div>The intern name: " +interns[i].name+ "</br>The intern ID: "+interns[i].ID+"</br>The intern email: "+"<a href='mailto://"+interns[i].email+"'>"+interns[i].email+"</a>"+"</br>The intern school: "+interns[i].school+"</div></br>"
            };
        let footer = 
        `</main></body></html>`
        this.writeToFile('./dist/index.html',`${header}${topText}</br>${managerText}</br>${engineersText}</br>${internsText}${footer}`); 
    }

    //write file
    writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
          }
          console.log('HTML page created successfully!');
        });
  };

    initializePage() {
        this.promptUserEmployee('manager');
    }
}

module.exports = Page;
    