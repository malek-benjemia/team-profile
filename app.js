const fs = require('fs');
const Page= require('./lib/Page.js');

//initial function
new Page().initializePage();

//write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
          console.log(err);
          return;
        }
        console.log('HTML page created successfully!');
      });
};

    