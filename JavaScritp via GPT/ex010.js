let string = 'coisa' 
let array = string.split('').sort()
console.log(array)



let string2 = 'banana'
let array2 = string2.split('').sort()
console.log(array2)


if(array.join('') == array2.join('')){
 console.log('Arrays identicos')
}else{
    console.log('Arrays não identicos')
}