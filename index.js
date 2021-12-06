const fs = require('fs').promises;
const arguments = process.argv.slice(2)

async function readFile(file) {
    const data = await fs.readFile(file)
    console.log(data.toString())
}

console.log(readFile('./spesa.txt'))

async function writeFile (file, content) {
    await fs.writeFile(file, content)
}

const content = `
prodotto: ${arguments[0]}
Quantità: ${arguments[1]}
`

fs.writeFile('spesa.txt', content, { flag: 'a+' });

