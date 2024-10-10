// -------------  Atividade 1 : EX 1 -----------

let numero1 = 10;
let numero2 = 20;


let soma = numero1 + numero2;


console.log("A soma de", numero1, "e", numero2, "é:", soma);

// -------------  EX 2 -----------

let mensagem = "Olá, Está é minha mensagem.";

console.log(mensagem);

// -------------  EX 3 -----------

let valorBooleano = true;

console.log("O valor da variável booleana é:", valorBooleano);

// -------------  EX 4  -----------

let numero = 3.1415;

console.log("O valor da variável é:", numero);

// -------------  Atividade 3 : EX 1 -----------

let nomeCompleto = "Thiago Lopes";

let nomeModificado = nomeCompleto.replace("Lopes", "Sousa");

let resultado = `O nome trocado é : ${nomeModificado}`;

console.log(resultado);

// -------------  Atividade 4 : EX 1 -----------

let preco = 100; 
let desconto = 0.2; 
let precoFinal = preco - (preco * desconto);

console.log("Preço final com desconto: R$", precoFinal);

// -------------  Atividade 6 : EX 1 -----------

let jogosFavoritos = ["League of Legends", "God of War", "Minecraft", "Zelda", "Dark Souls"];
let segundoJogo = jogosFavoritos[1].toUpperCase();

console.log("Meu segundo jogo favorito em maiúsculas: " + segundoJogo);

// -------------  Atividade 7 : EX 1 -----------

let nomeCompletos = "Thiago Lopes";
let partesNome = nomeCompletos.split(" ");
let sobrenome = partesNome[1];

console.log("Meu sobrenome é " + sobrenome + ".");
