/* READ THE CODE LAZY POTATO */

//Spread Oprator
const colors = [ 'Blue', 'Red', 'Green' ]
const item_colors = [ 'Cyan', ...colors ,'Purple' ]
console.log('Phone Color Options : ' + item_colors );
const number = 12345;

//Rest Oprator
const rest_function = ( ...array ) => { console.log( array.length ) }
rest_function()
rest_function( 5, 2, 3 )
/* IT COMBINES ALL THE ELEMENTS OF AN ARRAY */

