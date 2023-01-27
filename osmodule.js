const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds (how long computer has been running for)
console.log(`The system uptime is ${os.uptime()} seconds`)

// create new object with properties related to our operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)