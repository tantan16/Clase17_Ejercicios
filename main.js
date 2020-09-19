//FUNCIONES NATIVAS DE JS (metodos)
// todos los tipos de datos en js numeros,, strings, booleanos, TIENEN PROPIEDADES Y METODOS
//Propiedades de strings---> longitud 
//-----EJEMPLO LONGITUD DE UNA STRING----
// const contrasenia = prompt(`INGRESE SU CONTRASEÑA`)

// console.log(contrasenia.length)//----> el resultado de esto es un número.

// if (contrasenia.length >= 10){
//     alert(`Pasword válido`)
// -----PRIMER EJERCICIO----


// const contarLetrasNombre = (nombre, apellido) => {
//     return `tu nombre tiene ${nombre.length} letras y tu apellido tiene ${apellido.length} letras`
// }

// console.log (contarLetrasNombre(`Tania`, `elizalde`))

//METODOS STRINGS ---son funciones que el lenguaje ya tiene preparado el lenguaje para que lo usemos
// //1.CONCATENAR
// let nombre = "malena"
// let apellido = "rey"

// console.log(nombre.concat(apellido))

// edadComoNumero= parseInt(79)---NUMERO ENTERO 

// edadComoNmero= parseFloat(79.9)---NUMEROS DECIMALES SON MÁS PESADOS A NIVEL COMPUTACIONAL 

// edadComoNumero = number (79.9)------LO MISMO QUE parseFloat 

//EJERCICIO CÓMO VERIFICAR QUE UN NÚMERO ES UN NÚMERO FN IS NAN

// const telefono = prompt(`Escriba su telefono`)

// let telefonoComoNumero = parseInt(telefono)
// if (isNaN(telefonoComoNumero)){
//     alert(`Escribiste un teléfono inválido`)
// }

//PASAR DE MINUSCULAS A MAYUSC Y VISCEVERSA toUperCase toLowerCase

// let nombre = "MALENA"

// console.log(nombre.toLowerCase) 



//COMO COLOCAR LA PRIMER LETRA EN MAYÚSCULA CON MAYUS
// let nombre = "tania"
//const normalizarNombre =(nombre)=>{
//   let nombreSinEspacios = nombre.trim()
// const primeraLetraDelNombre = nombreSinEspacios.charAt(0)
// const primeraEnMayus = primeraLetra.toUpperCase()
//const restoDelNombre = nombre.slice (1, nombre.length)
//const restoEnMinus = restoDelNombre.lowerCase()
//nombreNormalaizado = primeroEnMayus.concat(restoEnMinus)
//return nombreNormalizado
//}
//console.log(normalizarNombre(nombre))
//
//nombre.trim()
//indexOf !!!! Esta función permite buscar una letra en un texto  
// const nombre = "Florencia"

// console.log (nombre.indexOf("a"))


//includes  es como indexOf pero te responde en booleano y funciona para palabras completas
// const nombre = "Tania Eliz8alde Vargas"
//console.log(nombre.includes("p"))


//replace---->para reemplazar letras o palabras en una oración, SOLO SE REEMPLAZA LA PRIMERA APARICIÓN Y DISTINGUE ENTRE MAYUS Y MINUS
// Puede recibir expresiones regulares (regex)

//const aguante = `Lu, no dejes Ada por favor`
//console.log(aguante.replace(`Lu`, `maca`))

//Ejemplos expresiones regurales 
//const mensaje= "Mi gato es dulce. Mi gato es lindo"
//console.log(mensaje.replace(/gato/gi,"perro"))

const burlarse = (string) =>{
    let burla;
    burla = string.replace(/a/g, "i")
    burla = burla.replace(/e/g, "i")
    burla =  burla.replace(/o/g, "i")
    burla = burla.replace(/u/g, "i")
    return burla
}

console.log(burlarse("programar es dificil"))













