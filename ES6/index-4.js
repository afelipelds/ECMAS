
class Calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  
  sum(valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new Calculator()
let sum = calc.sum(1,2)
console.log(sum)


/******* Modules */
import {hello} from './module'

let helloFromModule = hello()
console.log(helloFromModule)


/**Generators */

function* helloWorld() {
  if ( 1 == '1') {
    yield 'Hello World!!'
  }

  if ( 2 == '2') {
    yield 'Imma Big World'
  }
}

const genHello = helloWorld()
console.log(genHello.next().value)
console.log(genHello.next().value)
console.log(genHello.next().value)
console.log(genHello.next().value)