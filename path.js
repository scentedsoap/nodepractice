const path = require('path')

// log out path seperator
console.log(path.sep)

//join multiple subfolders to get path to base file/folder
const filePath = path.join('\content', 'subfolder', 'test.txt')
console.log(filePath)

//get the base file/folder from path
const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test')
console.log(absolute)