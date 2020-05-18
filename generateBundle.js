const glob = require('glob')
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const yamlinc = require('yaml-include')

const files = glob.sync('data/**/*.yaml')
const data = {}

for (const file of files) {
  const components = file.split(path.sep).slice(1)
  let pointer = data
  console.log(`Parsing ${file}`)
  for (const component of components) {
    if (component.endsWith('.yaml')) {
      const fileKey = component.replace('.yaml', '')
      const src = fs.readFileSync(`./${file}`, 'utf8')
      pointer[fileKey] = yaml.load(src, {
        schema: yamlinc.YAML_INCLUDE_SCHEMA
      })
    } else {
      if (!pointer[component]) {
        pointer[component] = {}
      }
      pointer = pointer[component]
    }
  }
}

fs.writeFileSync('src/data.js', `export default ${JSON.stringify(data, null, 2)}`)