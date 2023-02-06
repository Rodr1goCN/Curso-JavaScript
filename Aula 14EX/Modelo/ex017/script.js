function gerar(){
var num = document.getElementById('numCai')
var tabela = document.getElementById('Tabu')
if (num.value.length == 0){
    alert('Digite um número!')
} else {
    var n = Number(num.value)
    var c = 1
    tabela.innerHTML = '' // limpa a tabuada para uma nova tabuada
    while (c <= 15){
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tabela${c}` //
    tabela.appendChild(item)
    c++

    }
}
}