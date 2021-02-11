const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');


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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
                <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css">
                <link rel="stylesheet" href="../src/assets/css/style.css" />
                <title>Team Profile</title>
        </head>
        <body class="flex-column min-100-vh">
        <main>`
        let topText = "<h1 class='flex-row justify-space-around'>My Team</h1></br><div class='flex-row justify-space-around'>";
        let managerText = "<div class='col-3 card'><div class='card-header text-uppercase'>" +manager[0].name+ "</br><span class='oi oi-briefcase'></span>  "+manager[0].role+"</div></br><div class='card-body'>ID: "+manager[0].ID+"</br>Email: "+"<a href='mailto://"+manager[0].email+"'>"+manager[0].email+"</a>"+"</br>Office number: "+manager[0].officeNb+"</div></div></br>";
        let engineersText = "";
        for (var i = 0; i < engineers.length; i++)  {
            engineersText=engineersText+ "<div class='col-3 card'><div class='card-header text-uppercase'>" +engineers[i].name+ "</br><span class='oi oi-laptop'></span>  "+engineers[i].role+"</div></br><div class='card-body'>ID: "+engineers[i].ID+"</br>Email: "+"<a href='mailto://"+engineers[i].email+"'>"+engineers[i].email+"</a>"+"</br>GitHub: <a href='https://github.com/"+engineers[i].git+"'>"+engineers[i].git+"</a></div></div></br>"
          };
        let internsText = "";
        for (var i = 0; i < interns.length; i++)  {
              internsText=internsText+ "<div class='col-3 card'><div class='card-header text-uppercase'>" +interns[i].name+ "</br><span class='oi oi-heart'></span>  "+interns[i].role+"</div></br><div class='card-body'>ID: "+interns[i].ID+"</br>Email: "+"<a href='mailto://"+interns[i].email+"'>"+interns[i].email+"</a>"+"</br>School: "+interns[i].school+"</div></div></br>"
            };
        let footer = 
        `</div></main></body></html>`
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
    