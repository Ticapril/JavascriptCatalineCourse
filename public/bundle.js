//esqueça VAR Aula Const e Let
//const & let

//const não permite reatribuição mas permite mutação
//mutação exemplo
// const person = {name: 'Yung'}
// //person = {name: 'Gabriel'} //reatribuição me gera um erro
// person.name = 'Gabriel'; // mutação
// console.log(person.name) // nesse caso não gerou um erro


// //Aula Operações em Array
// const numbers = [1,2,3,4,5]

// numbers.forEach

// //Aula Arrow Function Aprenda isso logo !

// const todos = [
//     { text: 'lavar a louça', done: true},
//     { text: 'apanhar o lixo', done: false},
//     { text: 'dobrar as roupas', done: false},
// ]

// // const doneTodos = todos.filter((todo) => todo.done)

// // console.log(doneTodos)

// // function anything(){ //sintaxe antiga
// //    console.log('hello world')
// //}
// // const anything = () => console.log('hello world') //arrow Function
// // anything()

// // const anything = () => ({ name: 'Yung'}) // para retornar um objeto coloque entre parenteses
// // console.log(anything())

// //Aula Parâmetro Padrão

// //as duas funções abaixo são iguais a diff é que um é verbosa e a outra não quanto menos código melhor otimização
// function sayHello(name = 'VALOR PADRAO'){
//     console.log('ola' + name)
// } 
// sayHello()
// const sayHello = (name ='Fulano') => console.log('olá ' +  name)
// sayHello()

//Aula template Strings

// const showProduct = (product, price) => {
//     console.log(`O valor de ${product.toUpperCase()} é R$ ${Math.round(price)}, pode comprar!`)
// }
// showProduct('camisa',15,80)

//Aula Object Short Syntax

// const name = 'camisa'
// const price = 20

// const product = {
//     name,
//     price,
//     inStock: true
// }

// console.log(product)

// //Aula Desestruturação
// //case 1 Array

// const fruits = ['laranja','morango','maçã']

// const [a, b, c] = fruits
// // const a = fruits[0]
// // const b = fruits[1]

// console.log(a,b)

// //case 2 Object

// const person = {
//     firstName: 'Yung',
//     secondName: 'Silva',
//     age: 23,
//     address: {
//         city: 'Recife',
//         region: 'PE',
//     },
// }
// // const firstName = person.firstName
// // const secondName = person.secondName
// // const {firstName, seconName, address: {city} } = person

// //desestruturação funções

// const showFullName = ({ firstName, secondName}) => {
//     console.log(`${firstName} ${secondName}`)
// }
// showFullName(person)

//Aula Operadores rest/spread

// const numbers = [1,2,3,4,5]

// const [first, second, ... rest] = numbers

// console.log(rest)

// const sum = (... params) => {
//     return params.reduce((total, next) => total + next)
// }
// console.log(sum(5,5,10,10))

//spread

// const numbers1 = [1, 2, 3, 4, 5]
// const numbers2 = [5, 6, 7, 8, 9, 10]

// const numbers = [ ... numbers1, ...numbers2]

// console.log(numbers)

// const person = {
//     name: 'Yung',
//     age: 23,
//     height: 1.73,
//     company: 'Cataline',
// }

// const person1 = {
//     ...person,
//     company: 'Google'
// }

// //Aula Classes, muito simples você já possui a base de conhecimento
// //Funções construtoras

// // const car = {
// //     brand: null,
// //     price: 0
// // }

// // const civic = car
// // civic.brand = 'honda'
// // civic.price = 130

// // const hb20 = car
// // hb20.brand = 'hyundai'
// // hb20.price = 80

// function Car(brand, price){
//     this.brand = brand
//     this.price = price
// }
// const civic = new Car('honda', 130)
// const hb20 = new Car('hyundai', 80)

//this faz referencia ao próprio escopo

//Aula Classes

// class Car {
//     constructor(brand, price){
//         this.brand = brand
//         this.price = price
//     }
//     run(){
//         console.log('correr')
//     }
// }

// const civi = new Car('honda',130)

//Aula Get & Set

// class Person {
//     constructor(name) {
//         this._name = name//esse _ significa dizer que name é privado
//     }
//     get name(){
//         return this._name
//     }
//     set name(newName){
//         this_name = newName
//     }
// }

// const person = new Person('Yung Silva')

// person.name = 'João Silva'

// console.log(person.name)


//Aula Métodos Estáticos

// class Calculator{
//     static sum(a, b) {
//         return a + b
//     }
// }

// console.log(Calculator.sum(10, 5))

// class Person{
//     constructor(firstName, secondName){
//         this.firstName = firstName
//         this.secondName = secondName
//     }
//     get fullName(){
//         return Person.joinNames(this.firstName, this.secondName)
//     }
//     static joinNames(firstName, secondName){
//         return `${firstName} ${secondName}`
//     }
// }
// const person = new Person('Yung', 'Silva')

// console.log(person.fullName)

//Aula Herança

class Veiculo {
    constructor(rodas){
        this.rodas = rodas
    }
    acelerar(){
        console.log('acelerou')
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete){
        super(rodas)
        this.capacete = capacete
    }
    empinar(){
        console.log(`empinou com ${this.rodas} rodas`)
    }
    taUsandoCapacete(capacete){
        return capacete? console.log('sim,fugiu da multa'):console.log('não, multado por infringir a lei') 
    }
    acelerar() {
        super.acelerar() // super referencia a classe pai
        console.log('acelerou muitoooo')
    }
}

const bross = new Moto(2)
bross.acelerar()
bross.taUsandoCapacete(false)







