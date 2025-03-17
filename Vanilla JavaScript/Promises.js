//

//WE USE PROMISE TO AVOID USING CALLBACK FUNCTIONS
//WE DON'T WANT TO USE CALLBACK FUNCTIONS BECAUSE IT 
//ENDS UP TURNING INTO A CALLBACK HELL.

//OVERALL WE WANT TO MAKE A SYSTEM THAT IS LIVE AND GIVES
//US LOGS OF HOW OUR CODE IS WORKING
//WE CALL THIS SYSTEM ERROR HANDLING CODES

//ERROR HANDLING WITH CALLBACK FUNCTIONS
function callbackFunction( callback, error ) {
    let user = ['online', 'offline']

    if ( user == 'offline' ){
        error({ errorname: '403', message: 'user left the site' })
    } else if( user == 'online' ){
        error({ name: '400', message: 'user is online' })
    } else {
        callback( 'everything is allright' )
    }
}

//ERROR HANDLING WITH PROMISE
function promiseFunction(){
    let user = ['online', 'offline']
    let download = false

return new Promise(( resolve, reject ) => {

if ( user == 'online' ){ reject( { name: '403', message:'user is online' } ) } 
else if ( uder == 'offline' ){ reject( { name: '400', message:'user is offline' } ) } 
else { resolve( { name: 'user is downloading'} ) }
    
    })
}