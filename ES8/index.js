const data = {
  frontend: 'Andrés',
  backend: 'Miguel',
  design: 'Marcela'
}

/***Obj to Mtx */
const entries = Object.entries(data)
console.log('entries: \n', entries)
console.log('entries.lenght: \n', entries)

const values = Object.values(data)
console.log('values: \n', values)
console.log('values.length: \n', values)

/***padStart & padEnd*/

const string = 'agrego'
console.log(string.padStart(17, 'aca'))  //R: acaacaacaacagrego
console.log('food'.padEnd(7, 'aca'))     //R: foodaca
console.log('cadena'.padStart(12, '*.-'))     //R: *.-*.-cadena
console.log('_texto'.padEnd(11, '///-'))     //R: _texto///-/
