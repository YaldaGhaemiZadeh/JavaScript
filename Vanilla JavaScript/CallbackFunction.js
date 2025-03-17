/* READ THE CODE LAZY POTATO */

//A callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete
//some kind of routine or action. (Copilot)


//exampleFunction takes two argument
//first one is name
//second one is a placeholder for name of the function that we want exampleFunction to invoke it 
const exampleFunction = ( name, callback ) =>{

    //it will replace the name we gave it with the name argument
    console.log(`hi ${name}`)

    //it will replace the name of the function in line 22 with callback
    // callback() = greet()
    callback()   
}

//the other function that we want exampleFunction to invoke it
function greet (){
    console.log('Even Though Life is Cruel, Stay Tough.')  
}

//parameters
// exampleFunction('Programmer', greet)


function fetchData( callback ){
    const data = { id: 10058, name: 'john doe' };
    setTimeout(() => { callback( data ) }, 5000 );
}


function displayData( data ){ console.log(` Hello my name is ${ data.name } and my user ID is ${ data.id }, nice to meet you! `); }

fetchData(displayData)