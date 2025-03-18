//input 1.get input 2.break it down into an array
// 3. reverse it 
//output 1.show 

import rl from 'readline'
const readline = rl.createInterface( process.stdin, process.stdout )

//! getting input
readline.question(`\nSay somting: `, (input) =>{

    const answer = input
    let arrayAnswer = []

    //! seperating the characters
    for(let i = 0; i < answer.length; i++){ arrayAnswer.push( answer[i] )}
    
    arrayAnswer.reverse()
    
    setTimeout(()=>{ console.log(`Your reversed answer: ${arrayAnswer.join('')}`) }, 7000)

    //* AI improved answer
    let AIhelp = input.split('').reverse().join('')
    setTimeout(() => { console.log(`Ai's help: ${ AIhelp }\n`) }, 8000);

    readline.close()
})
