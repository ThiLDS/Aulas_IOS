let contador = 11
let contador2 = 11

//Executa o código 1x, identifica que é falso e não executa mais
do {
    contador++
    console.log(contador);
} while (contador <=10);

console.log(`-----------`);

//Não executa o código por ser falso
while (contador2 <= 10) {
    contador2++
    console.log(contador2);
}