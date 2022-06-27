// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
import fs from 'fs'

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve({
        ok: true,
        message: 'Readme File Created!!',
      })
    })
  })
}

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve({
        ok: true,
        message: 'file read successfully',
        read: data.toString(),
      })
    })
  })
}

export { writeFile, readFile }

// module.exports = generateMarkdown
