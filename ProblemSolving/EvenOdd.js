import { createInterface } from 'readline'

let readline = createInterface( process.stdin, process.stdout )

readline.question('Enter a number: ' , ( number ) =>{ 
    if ( number % 2 === 0 )
         { console.log(`your number "${ number }" is even. `)} 
    else { console.log(`your number "${ number}" is odd. `)}
})