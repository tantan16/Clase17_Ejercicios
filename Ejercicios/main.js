// let texto = `bienvenido a JS`
// let cantidadDeCaracteres = texto.length

// console.log(cantidadDeCaracteres)

// // 1. tienenMismaLongitud (a,b)

// const tienenMismaLongitud = (a,b) => {

//     if (a.length == b.length) {
//         return true
//     }

//     else {
//         return false 
//     }

// }

// console.log (tienenMismaLongitud('javascript', 'java')) // false
//  console.log (tienenMismaLongitud('manzana', 'cerveza')) // true
//  console.log (tienenMismaLongitud('taña', 'peña')) // true
//  console.log (tienenMismaLongitud('chepino', 'diego')) // true


// //2. esUltimoCaracter (palabra, caracter)

// const esUltimoCaracter = (palabra, caracter) =>{
//     if (palabra.includes(caracter)) {
//         return true 
//     }
    

//     else {
//         return false
//     }
// } 

// console.log(esUltimoCaracter('lovelace', 'e')) // true
// console.log(esUltimoCaracter('lovelace', 'f')) // false



//3. esContraseniaValida (contrasenia)

// const esContraseniaValida = (contrasenia) =>{
//     if (contrasenia.length >= 8){
//         return true
//     }

//     else {
//         return false
//     }
// }

// console.log(esContraseniaValida('contraseniaMuySegura')) // true
// console.log(esContraseniaValida('abc123')) // false
// console.log(esContraseniaValida('papa')) // true
// console.log(esContraseniaValida('labandabienloca')) // false


//4.sonIguales 

const sonIguales = (a, b) => {
    if (a.includes(b)){
         return false
    }

    else {
        return true
    }
}

console.log(sonIguales('javascript', 'JavaScript')) // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')) // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')) // false


//Male si ves esto, me trabé con este ejercicio, seguiré con las clases.