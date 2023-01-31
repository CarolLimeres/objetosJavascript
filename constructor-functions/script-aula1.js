function Carro(marcaAtribuida, precoAtribuido) {
  // o this faz referência a esse construtor carro
  // aqui embaixo to criando propriedades pro novo objeto que for criar
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

// honda é um objeto que vem do construtor carro
const honda = new Carro("Honda", 3000);
// criar uma propriedade pro objeto honda:
// honda.teste = "oi";
// criar um método (método é atribuir uma função) pro objeto honda:
// honda.andar = function () {
//   console.log("andou");
// };

// construindo um novo objeto a partir do construtor Carro
const fiat = new Carro("Fiat", 4000);
// fiat.marca = "Fiat";

function Carro2(marca, precoInicial) {
  this.taxa = 1.2; //taxa de 20%
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  this.marca = marca;
  console.log(this);
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);
