/************************ Peeparar cosas que necesito de un objeto */
const data = {
  frontend: 'Andrés',
  backend: 'Miguel',
  design: 'Marcela'
}
const data2 = {
  ...data,
  design: 'Marcela'
}
const data3 = {
  ...data,
  ...data2,
  marketing: 'Isabella'
}

let {frontend, ...all} = data3
console.log(all)

/************************* */

const helloWorld = () => {
  return new Promise( (resolve, reject) => {
    if (1 == '1') {
      setTimeout( () => resolve('Hola holaa!'), 3000)
    } else {
      reject( new Error('Parece que algo anda mal'))
    }
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally( () => console.log('Finalizó la promesa'))

  /************************* */

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2020-04-18')
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year,month,day)
  