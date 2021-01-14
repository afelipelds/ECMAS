let array = [1,2,3, ['x','y','z', ['a','b','c']]]

console.log(array.flat(1))

let array2 = [1,2,3,4,5]
console.log(array2.flatMap( value => [value, value *2]))

/***************************** */

let helloWorld2 = '                  Holaa'
let helloWorld1 = 'Holaa                  '

console.log(helloWorld2.trimStart())
console.log(helloWorld1.trimEnd())

/***************************** */
let meSymbol = `Mis símbolos`
let symbol = Symbol(meSymbol)
console.log(symbol.description)

const sym = Symbol("esto es un simbolo");
console.log(typeof(sym))        //symbol

var symObj = Object(sym);
console.log(typeof(symObj));    //object