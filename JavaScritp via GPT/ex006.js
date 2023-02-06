function somarArray(arr){
    let somar = 0;
    for (let num = 0; num < arr.length; num++){
        somar += arr[num];
    }
    return somar;
}
console.log(somarArray([1,5,7,9,3,25]));
