//create the project title
export const mainContent = (projectArr) => {
  return `
# ${projectArr.Project_Title}

## Description
${projectArr.Description}

## Installation
${projectArr.Installation}

## Usage Information
${projectArr.usage_info}

## How to Contribute 
${projectArr.How_to_Contribute}
`
}
