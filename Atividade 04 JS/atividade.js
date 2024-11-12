// -------------  Atividade 4 : EX 1 -----------
const jogos = ['Valorant', 'The Witcher 3', 'God of War', 'Among Us', 'League of Legends'];

// -------------  Atividade 4 : EX 2 -----------
jogos.forEach((jogo, indice, array) => {
    console.log(`Jogo: ${jogo}, Posição: ${indice}, Array Completo: ${array}`);
});

// -------------  Atividade 4 : EX 3 -----------
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero * 2);

console.log("Array com o dobro dos valores:", numerosDobrados);

// -------------  Atividade 4 : EX 4 -----------
const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log("Números pares no array:", numerosPares);

// -------------  Atividade 4 : EX 5 -----------
const frutas = ['manga', 'melancia', 'pêssego', 'amora'];

frutas.forEach(fruta => console.log("Fruta:", fruta));

// -------------  Atividade 4 : EX 6 -----------
let idades = [16, 48, 23, 22, 45, 8, 12];

// -------------  Atividade 4 : EX 6(a) -----------
const idadesAdultas = idades.filter(idade => idade >= 18);

console.log("Idades adultas (18+):", idadesAdultas);

// -------------  Atividade 4 : EX 6(b) -----------
idadesAdultas.forEach(idade => console.log(`Sua idade é: ${idade}`));