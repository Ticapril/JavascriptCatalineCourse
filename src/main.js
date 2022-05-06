//esqueça VAR Aula Const e Let
//const & let

//const não permite reatribuição mas permite mutação
//mutação exemplo
const person = {name: 'Yung'}
//person = {name: 'Gabriel'} //reatribuição me gera um erro
person.name = 'Gabriel'; // mutação
console.log(person.name) // nesse caso não gerou um erro


//Aula Operações em Array
const numbers = [1,2,3,4,5]

numbers.forEach








//Aula Arrow Function Aprenda isso logo !

const todos = [
    { text: 'lavar a louça', done: true},
    { text: 'apanhar o lixo', done: false},
    { text: 'dobrar as roupas', done: false},
]

// const doneTodos = todos.filter((todo) => todo.done)

// console.log(doneTodos)

// function anything(){ //sintaxe antiga
//    console.log('hello world')
//}
// const anything = () => console.log('hello world') //arrow Function
// anything()

// const anything = () => ({ name: 'Yung'}) // para retornar um objeto coloque entre parenteses
// console.log(anything())

//Aula Parâmetro Padrão

//as duas funções abaixo são iguais a diff é que um é verbosa e a outra não quanto menos código melhor otimização
function sayHello(name = 'VALOR PADRAO'){
    console.log('ola' + name)
} 
sayHello()
const sayHello = (name ='Fulano') => console.log('olá ' +  name)
sayHello()

//Aula template Strings

const showProduct = (product, price) => {
    console.log(`O valor de ${product.toUpperCase()} é R$ ${Math.round(price)}, pode comprar!`)
}
showProduct('camisa',15,80)
