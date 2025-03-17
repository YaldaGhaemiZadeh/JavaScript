/* READ THE CODE LAZY POTATO */

//Absolutely, the Map object is a useful and versatile addition to JavaScript,
//introduced in ES6. A Map holds key-value pairs, 
//and any value (objects, functions) can be used as either a key or a value.

const Countries = new Map()
Countries.set( 'Russia', 1 )
Countries.set( 'Japan', 2 )
Countries.set( 'England', 3 )
// console.log(Countries.get('Russia'))
// console.log(Countries.size)
// console.log(Countries.delete('England'))

const animals = new Map([ ['Crow', 6], ['Polar bear', 3], ['Dog', 9] ])

// console.log(animals.clear());
console.log( animals )

//YOU CAN ITERATE(REPEAT) OVER A MAP USING FOR...OF LOOP
for ( let [key, value] of animals ){ console.log(`${key}: ${value}`) }
