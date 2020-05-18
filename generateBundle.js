const glob = require('glob')
const path = require('path')
const fs = require('fs')

const files = glob.sync('data/**/*.js')
const data = {}

for (const file of files) {
  const components = file.split(path.sep).slice(1)
  let pointer = data
  for (const component of components) {
    if (component.endsWith('.js')) {
      pointer[component.replace('.js', '')] = require(`./${file}`)
    } else {
      pointer[component] = {}
      pointer = pointer[component]
    }
  }
}

fs.writeFileSync('src/data.js', `export default ${JSON.stringify(data, null, 2)}`)