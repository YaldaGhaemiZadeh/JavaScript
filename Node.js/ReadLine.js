const readline = require('node:readline')
//importing readline from node modules
const { stdin: input, stdout: output } = require('node:process')
//

const rl = readline.createInterface({ input, output })
//creating an interface for commandline 

const answer = null
//this answer is in the global scope
console.log(answer)


rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    //but this answer defined in the arrow function as an argument

  console.log(`Thank you for your valuable feedback: ${answer}`)

  rl.close()
})

console.log(answer)