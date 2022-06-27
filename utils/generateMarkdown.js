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

export { writeFile }

// module.exports = generateMarkdown
