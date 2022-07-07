const inquirer = require('inquirer')
const mainContent = require('./src/readme-template')
const writeFile = require('./utils/generateMarkdown')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Project_Title',
      message: 'What is your project title ?',
      validate: (titleInput) => {
        if (titleInput) {
          return true
        } else {
          console.log('Please enter project title')
          return false
        }
      },
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide description of your project :',
      validate: (description) => {
        if (description) {
          return true
        } else {
          console.log('Please enter description of the project')
          return false
        }
      },
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Provide Installation Instruction of your project :',
      validate: (installation) => {
        if (installation) {
          return true
        } else {
          console.log('Please enter installation instruction of the project')
          return false
        }
      },
    },
    {
      type: 'input',
      name: 'usage_info',
      message: 'Provide Usage Information of your project :',
      validate: (usage_info) => {
        if (usage_info) {
          return true
        } else {
          console.log('Please enter usage information of the project')
          return false
        }
      },
    },
    {
      type: 'input',
      name: 'How_to_Contribute',
      message: 'How to contribute to the project:',
      validate: (contribution_guidelines) => {
        if (contribution_guidelines) {
          return true
        } else {
          console.log(
            'Please enter contribution guidelne information of the project',
          )
          return false
        }
      },
    },
    {
      type: 'input',
      name: 'test_instructions',
      message: 'Provide test instructions of your project :',
      validate: (test_instructions) => {
        if (test_instructions) {
          return true
        } else {
          console.log('Please enter test instructions of the project')
          return false
        }
      },
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select a license based on your project',
      choices: [
        'Apache License 2.0',
        'MIT License',
        'Boost Software License 1.0',
        'Eclipse Public License 1.0',
        'Mozilla Public License 2.0',
      ],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your github username?',
      validate: (githubInput) => {
        if (githubInput) {
          return true
        } else {
          console.log('Please enter github username')
          return false
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: (emailInput) => {
        if (emailInput) {
          return true
        } else {
          console.log('Please enter your email address')
          return false
        }
      },
    },
  ])
}

promptUser()
  .then((projectArr) => {
    return mainContent(projectArr)
  })
  .then((pageREADME) => {
    return writeFile(pageREADME)
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse)
  })
  .catch((err) => {
    console.log(err)
  })
