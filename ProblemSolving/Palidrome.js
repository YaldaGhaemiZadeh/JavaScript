//input
//output
//process
//input : 1.string 2.from user #
//to lowercase #
//remove spaces #
//make a reversed version of array #
//compare the riversed version with the original

import * as rl from 'readline'
const readline = rl.createInterface( process.stdin, process.stdout )

readline.question( '\nEnter a palidrome wrord or string: ', (answer) =>{

    //* make all the characters lowercase
    var lowAnswer = answer.toLowerCase()
    console.log(`Lowercased input: ${lowAnswer}`)

    //* storing all the characters in an array
    var arrayAnswer = []
    for( let i = 0; i < lowAnswer.length; i++ ){ arrayAnswer.push( lowAnswer[i] )}
    console.log(`Seperated array of characters: ${arrayAnswer}\nLength of array: ${arrayAnswer.length}`)

    //* removing spaces using replace
    let NoSpaceChar = []
    for( let i = 0; i < arrayAnswer.length; i++ ){
        if( arrayAnswer[i] !== ' ' ){ NoSpaceChar.push(arrayAnswer[i])}}
    console.log(`Array with no spcace: ${NoSpaceChar}`);
    
    //* reversed array
    let reverseAnswer = NoSpaceChar.reverse()
    console.log(`Reversed Array: ${reverseAnswer}`)
    
    //i wanted to use two pointer tecnique but i didn't remember
    //* with AI's help 
    let start = 0
    let end = NoSpaceChar.length - 1
    let palidrome = true

    while( start < end ){
        if(NoSpaceChar[start] !== NoSpaceChar[end]){
            palidrome = false
        break
    }
    start++
    end--
}
    
    if(palidrome){ console.log(`Your input answer is a palidrome.\n`) }
    else { console.log(`Your input answer is not a palidrome.\n`) }

    //! rAcEcAr / mADAm
    readline.close()
})