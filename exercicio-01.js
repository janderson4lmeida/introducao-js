var peso = parseFloat(prompt("qual é o peso?"))
var altura = parseFloat(prompt("qual a sua altura?"))
var imc = peso /( altura * altura )
    alert("Seu IMC é: " + imc.toFixed(2))
    if(imc < 18.5){
        alert("o IMC indica baixo peso.")
    } else if (imc >= 18.5 && imc <= 24.9){
        alert("O IMC indica peso normal.")
    } else if (imc >= 25 && imc <= 29.9){
        alert("O IMC indica sobrepeso.")
    }else{
        alert("O IMC indica obesidade")
    }