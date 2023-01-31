// criação de objeto simples/puro:
// const Dom = {
//   seletor: "li",
//   //método/função:
//   element() {
//     //quanto to dentro de objeto e quero fazer referência a uma propriedade do objeto eu tenho que falar com a palavra chave this
//     //console.log(this.seletor);
//     // selecionar o elemento mesmo: (nao retornar uma string como tava antes)
//     return document.querySelector(this.seletor); //vai retornar a primeira li
//   },
//   ativar() {
//     this.element().classList.add("ativar"); //p fazer referência ao element de cima, que ja ta selecionando o elemento
//   },
// };

// Dom.ativar();

// Dom.seletor = "ul";
// Dom.ativar();

//função construtora:
function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

//como usar a função construtora:
//criar um novo elemento:
const li = new Dom("li");
const ul = new Dom("ul");

const lastLi = new Dom("li:last-child");
lastLi.ativar("ativar");
