
export function notNumber (value) {

  return isNaN (value) || ""
}

export function calculateIMC (peso, altura) {

  return (peso / ((altura /100)** 2)).toFixed(2)

}


