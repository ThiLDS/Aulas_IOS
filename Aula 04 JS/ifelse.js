let nota1, nota2, media, faltas;
nota1 = 10 
nota2 = 5
faltas = 9
media = (nota1 + nota2) /2
// media >= 7 :) - 5
// media >= 7 :( - 5 
if (media >= 7 && faltas <=5) {
    console.log(`O aluno foi aprovado com ${media} de média e com ${faltas} faltas.`);    
} else { 
    console.log(`O aluno foi reprovado com ${media} de média e com ${faltas} faltas.`);
}

console.log(`Fim.`);