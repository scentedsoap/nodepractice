//Creating new property for export object
module.exports.items = ['item1', 'item2']
const person = {
    name: 'bob',
}

//Creating newPerson property for module
module.exports.newPerson = person

function logOutModule() {
    console.log(module)
}