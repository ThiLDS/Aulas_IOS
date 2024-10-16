// -------------  Atividade 1 -----------

let idade = 23;

if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}

// -------------  Atividade 2 -----------

let idade = 17;

if (idade >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você ainda não pode dirigir.");
}

// -------------  Atividade 3 -----------

let numero = -5;

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// -------------  Atividade 4 -----------

let altura = 1.75; // Altura
let peso = 70; // KG

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC está dentro do intervalo saudável.");
} else {
    console.log("Seu IMC não está dentro do intervalo saudável.");
}

// -------------  Atividade 5 -----------

let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Digite um número de 1 a 7.");
}

// -------------  Atividade 6 -----------

let idade = 23;

if (idade < 12) {
    console.log("Você é uma criança.");
} else if (idade < 18) {
    console.log("Você é um adolescente.");
} else if (idade < 60) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}

// -------------  Atividade 7 -----------

let num1 = 10;
let num2 = 5;
let operacao = "+"; // Qual conta gostaria

switch (operacao) {
    case "+":
        console.log("Resultado: " + (num1 + num2));
        break;
    case "-":
        console.log("Resultado: " + (num1 - num2));
        break;
    case "*":
        console.log("Resultado: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Resultado: " + (num1 / num2));
        } else {
            console.log("Divisão por zero não é permitida.");
        }
        break;
    default:
        console.log("Operação inválida.");
}

// -------------  Atividade 8 -----------

let codigoPromocional = "DESC2"; // Código
let valorOriginal = 1000; // Valor do produto
let desconto = 0;

if (codigoPromocional === "DESC1") {
    desconto = 0.05;
} else if (codigoPromocional === "DESC2") {
    desconto = 0.10;
} else if (codigoPromocional === "DESC3") {
    desconto = 0.15;
} else if (codigoPromocional === "DESC4") {
    desconto = 0.20;
} else if (codigoPromocional === "DESC5") {
    desconto = 0.25;
} else {
    console.log("Erro: Código promocional inválido.");
}

if (desconto > 0) {
    let valorComDesconto = valorOriginal * (1 - desconto);
    console.log("Valor original: R$ " + valorOriginal);
    console.log("Desconto: " + (desconto * 100) + "%");
    console.log("Valor com desconto: R$ " + valorComDesconto.toFixed(2));
}
