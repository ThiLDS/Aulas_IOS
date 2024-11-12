 let altura = parseFloat(prompt('Coloque sua altura'))
 let peso = parseFloat(prompt('Coloque seu peso'))

 function calcularIMC (altura = 0.0, peso = 0.0) {
    let imc = peso / (altura*altura)
    
    if (imc < 16.9) {
        alert(`Você está muito abaixo do peso ${imc.toFixed(2)}`)
    }
    else if (imc <= 18.4) {
        alert(`Você está abaixo do peso ${imc.toFixed(2)}`)
    }
    else if (imc <= 24.9) {
        alert(`Você está com o peso normal ${imc.toFixed(2)}`)
    }
    else if (imc <= 29.9) {
        alert(`Você está acima do peso ${imc.toFixed(2)}`)
    }
    else if (imc <= 34.9) {
        alert(`Você está com obesidade gray I ${imc.toFixed(2)}`)
    }
    else if (imc <=40) {
        alert(`Você está com obesidade grau II ${imc.toFixed(2)}`)
    }
    else {
        alert(`Você está com obesidade grau III ${imc.toFixed(2)}`)
    }
 }
 calcularIMC(altura, peso)