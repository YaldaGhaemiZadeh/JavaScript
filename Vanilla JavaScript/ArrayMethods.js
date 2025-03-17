/* READ THE CODE LAZY POTATO */

const exampleArray = [ 10, 30, 60, 90 ]

//map
const map_function = ((number) => { return number + 1000 })
const map_results = exampleArray.map( map_function )
console.log( 'Map Method : ' + map_results )


//filter
function big_numbers (number){ return number >= 50; }
const results = exampleArray.filter(big_numbers)
console.log( 'Filter Method : ' + results )


//reduce
function reduce_function(accumulator, number){ return accumulator + number }
const total = exampleArray.reduce( reduce_function, 0 )
console.log('Reduce Method : ' + total )
