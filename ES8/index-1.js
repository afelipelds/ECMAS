const helloWorld = () => {
  return new Promise( (resolve, reject) => { //1
    if (1 == '1') {
      setTimeout( () => resolve('Hola holaa!'), 3000)
    } else {
      reject( new Error('Parece que algo anda mal'))
    }
  })
}

const helloAsync = async () => {            
  try {
    const helloHello = await helloWorld()   //2
    console.log(helloHello)
  } catch (error) {
    console.log(error)
  }
}

helloAsync()                                //3