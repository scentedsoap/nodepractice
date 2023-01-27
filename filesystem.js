//file system module
//sync - does everything line by line
//async - start a task, offload it, do another task

const {readFileSync, writeFileSync} = require('fs')
// same way accessing method below
// const fs = require('fs')
// fs.readFileSync

// read first and second file from content folder with utf-8 encoding
console.log('start sync')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

//write to file, if no file exists, create a new file and add the following string. 
//Can use object with flag property 'a' to append string to existing string in file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first} , ${second}`, { flag: 'a'})
console.log('done with this task')
console.log('starting the next task')

//async
//callback function: a function that is called after another function finishes
//example can be event listener which: first an event triggers, then the function is called

const {readFile, writeFile} = require('fs')

//read file with callback function (async style)
//if no encoding is provided the buffer is logged out


readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

console.log('start aysnc')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf-8', (err, result) => {
        const second = result
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`,
        { flag: 'a'},
        (err, result) => {
            if(err){
                console.log(err)
            } 
            console.log('done with this task')
        }
        )
    })
})
console.log('starting next task')