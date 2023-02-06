let numeros = [4, 7, 8, 6, 3, 1]
numeros.sort()
console.log(numeros)
let pos = numeros.indexOf(5)

if (pos == 5){
    console.log(`Esse número não existe`)
}else{
    console.log(`o valor 8 esta na posição ${pos}`)
}


/*
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])
*/
/*
Forma mais complicada de se fazer
for(let pos=0 ;pos < numeros.length ;pos++ ){
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
}
*/

//Forma mais fácil de se fazer
for(let pos in numeros){
    console.log(numeros[pos])
}
