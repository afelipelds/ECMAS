/**Parámetros en Objetos */
let name = "Andres"
let age = 27

obj = {name: name, age:age}

/**ES6 */
obj2 = { name, age }
console.log(obj,' | ', obj2)


/**arrow functions */
const names = [
  {name: 'andres', age: 27},
  {name: 'rodrigo', age: 21}
]

let listOfNames = names.map( function(item){
  console.log(item.name)
})

/** ES6*/
const listOfNames2 = names.map( item => console.log(item.name) )
const listOfNames3 = (name, age, country) => {
  console.log(name, age, country)
}
const listOfNames4 = item => {
  {/** some code*/}
}
const square = num => num * num


/** Promises */
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (1 === '1') {
      resolve('Hey! its resolved')
    } else {
      reject('Opps, naah. Isnt')
    }
  })
}

helloPromise()
  .then( response => console.log(response) )
  .catch( error => console.log(error) )