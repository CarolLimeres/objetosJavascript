// prototype sempre retorna um objeto

//o objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade e funções apendas

//o objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto pode ter acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

// objetos, funções, números, strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return " Abraçou";
  };
}

//da pra acessar as coisas do Pessoa através do prototype
Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou";
};

const andre = new Pessoa("Andre", 28);

// console.log(Pessoa.prototype);
// console.log(andre.prototype); //aqui da undefined pq o prototype só ta ligado a função

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");

//Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista); //forma mais simples

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
