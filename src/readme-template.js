const generateLicenseBadge = (license) => {
  if (license === 'Apache License 2.0') {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
   `
  } else if (license === 'MIT License') {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `
  } else if (license === 'Boost Software License 1.0') {
    return `
    [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
      `
  } else if (license === 'Eclipse Public License 1.0') {
    return `
      [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
      `
  } else if (license === 'Mozilla Public License 2.0') {
    return `
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
      `
  } else if (license === null) {
  }
}

//Create rest of the readme content
export const mainContent = (projectArr) => {
  return `
# ${projectArr.Project_Title}

${generateLicenseBadge(projectArr.license.join())}

## Description
${projectArr.Description}

## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [License](#License)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${projectArr.Installation}

## Usage
${projectArr.usage_info}

## Contribution
${projectArr.How_to_Contribute}

## License

## Tests

## Questions

`
}
