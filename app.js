const fs = require('fs');
const inquirer = require('inquirer');



const promptUser = () => {
    return inquirer.prompt([
      
        {
            type: 'input',
            name: 'description',
            message: 'ok',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                return false;
              }
            }
        },
       
        {
            type: 'checkbox',
            name: 'license',
            message: 'ok',
            choices: ['None', 'Apache License 2.0'],
            validate: nameInput => {
                if (nameInput.length==1) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        

    ]);
};

const generateIndex = () => {};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
          }
          console.log('HTML page created successfully!');
        });
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answer => {
        return writeToFile('./dist/index.html',generateIndex(answer));
      })
}

// Function call to initialize app
init();