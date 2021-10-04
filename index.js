const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

function writeToFile(data) {
    fs.writeFile('./readme/readme.md', data, function (err) {
        if (err) return console.log(err);

    });
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Title?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Description?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Installation?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Usage?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'License?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Contributing?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Test?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Questions?',
            },
        ])
        .then((answer) => {
            var input = generatePage(answer)
            writeToFile(input)
        })
}
// Function call to initialize app
init();