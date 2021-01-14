function newFunc(name, age, country) {
  var name = name || "andres"
  var edad = edad || "27"
  var country = country || "CO"
  console.log(name, edad, country)
}

/** ES6 */
function newFunc2(name = "andres", edad = "27", country = "CO") {
  console.log(name, edad, country)
}

newFunc2() /** Imprime los valores por defecto */
newFunc2('Ricardo', "29", "PE")

/** Template Literals */
let hello = "Hello"
let world = "World"

let epicPhrase = hello + world
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase)
console.log(epicPhrase2)

const uno = `Hola`
const dos = `Hallo`
const tres = `-${uno} ${dos}-`
console.log(tres)               //-Hola Hallo-
console.log(typeof(uno))        //string
console.log(typeof(dos))        //string
console.log(typeof(tres))       //string

let b = 'a'
console.log('.b', b)
let b = 'b'
console.log('..b', b)
