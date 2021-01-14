/** Multilínea */
let lorem = "Labore nostrud sunt laboris ut reprehenderit Lorem. Qui non quis velit qui consectetur aliqua. \n"
          + "otra frase con salto de línea"

/** ES6 */
let lorem2 = `Lorem qui non quis velit qui consectetur aliqua.
              Ahora esta frase se pega al salto de línea`

console.log(lorem)
console.log(lorem2)


/** Desestructuración */
let person = {
  'name': 'andrés',
  'age': 27,
  'country': 'CO'
}

console.log( person.name,person.age, person.country )

/** ES6 */
let {age, country} = person;
console.log(age, country)



/** Spread Operator */
let team1 = ['Andrés', 'Julián', 'Oscar']
let team2 = ['Alejandra', 'Jessica', 'Camila']

let education1 = ['David', 'Andrés', 'Julián', 'Oscar', 'Alejandra', 'Jessica', 'Camila']

/** ES6 */
let education2 = [ ...team1, 'David', ...team2]
console.log(education1)
console.log(education2)


/** LET & CONST */
{
  var global = "Var Global"
}

{
  let globalLet = "Let GLobal"
  console.log(globalLet)
}

const all = "all"
all = "odd"
console.log(all) /**Error */
