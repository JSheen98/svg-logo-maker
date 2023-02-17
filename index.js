const inquirer = require('inquirer')
const fs = require('fs')

function svgPrompt() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What shape would you like for your svg?',
                name: 'shape',
                choices: ['Circle', 'Rectangle', 'Triangle'],
            },
            {
                type: 'input',
                message: 'What would color would you like the background to be (you can use a color name or hexidecimal code)?',
                name: 'backgroundColor',
                validate: function(input){
                    if (input === '') {
                        return `\x1b[31mPlease enter a color\x1b[0m`
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: 'Enter your text (note: you can enter up to three characters):',
                name:'svgText',
                validate: function(input){
                    if (input.length > 3) {
                        return `\x1b[31mInput must be 3 characters or less\x1b[0m`
                    }
                    return true
                }
                
            },
            {
                type: 'input',
                message: 'What would color would you like the text to be (you can use a color name or hexidecimal code)?',
                name: 'textColor',
                validate: function(input){
                    if (input === '') {
                        return `\x1b[31mPlease enter a color\x1b[0m`
                    }
                    return true
                }
            },

        ]).then((data)=> {
            if(data.shape === 'Triangle') {
                fs.writeFile(`${data.shape}.svg`)
            } else if (data.shape === 'Circle') {
                fs.writeFile(`${data.shape}.svg`)
            } else {
                fs.writeFile(`${data.shape}.svg`)
            }
        })
}

svgPrompt()