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

// -------------  EX  -----------

let numero = 3.1415;

console.log("O valor da variável é:", numero);

// -------------  Atividade 3 : EX 1 -----------

let nomeCompleto = "Thiago Lopes";

let nomeModificado = nomeCompleto.replace("Lopes", "Sousa");

let resultado = `O nome trocado é : ${nomeModificado}`;

console.log(resultado);

// -------------  Atividade 4 : EX 1 -----------

var preco = 100; 
var desconto = 0.2; 
var precoFinal = preco - (preco * desconto);

console.log("Preço final com desconto: R$", precoFinal);

// -------------  Atividade 6 : EX 1 -----------

var jogosFavoritos = ["The Last of Us", "God of War", "Minecraft", "Zelda", "Dark Souls"];
var segundoJogo = jogosFavoritos[1].toUpperCase();

console.log("Meu segundo jogo favorito em maiúsculas: " + segundoJogo);

// -------------  Atividade 7 : EX 1 -----------

var nomeCompletos = "Thiago Lopes";
var partesNome = nomeCompletos.split(" ");
var sobrenome = partesNome[1];

console.log("Meu sobrenome é " + sobrenome + ".");
