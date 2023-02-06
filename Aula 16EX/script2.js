    var caixa = document.getElementById('mostrar') // mostra o valor digitado na 'caixa'
    var resultado = document.getElementById('res') //mostrara o resultado ao clicar em finalizar
    var numVazio = [] // variavel composta vazia para receber o valor futuramente
function gerar(){
    
   
    var numero = Number(document.getElementById('num').value) // transforma o valor digitado em numero
    
    if (numero == "" || numero < "" || numero > 100){ // se o numero for 0 ou digitado nada ou o numero for menor que 1 ou maior que 100 dara um alert
    alert('Digite um número entre 1 a 100!') 
   
    }else if (numVazio.indexOf(numero)== -1){ //não deixa adicionar numeros repetidos / -1 indica que o valor não foi encontrado na lista 
       
        var valor = document.createElement('option') // para aparecer o valor dentro da 'caixa' tem que criar um createElement()
        valor.text = `Valor ${numero} adicionado` // adiciona o texto dentro da 'caixa'
        caixa.appendChild(valor) // criar o valor dentro da 'caixa'
        numVazio.push(numero) // adiciona o numero no final da array
        resultado.innerHTML = '' // limpa a 'caixa' depois que adicionar um novo numero
        
        
    } else{
        return msgErro()// serve para criar uma function para depois adicionar um alert sobre a mensagem de erro
        
    }
    
   
}

function finalizar(){
    
var soma = 0
var numero = Number(document.getElementById('num').value)
if (numero == '' || numero < '' || numero > 100 ){ 
    alert('Digite um número entre 1 a 100!')
}else{
    for (var n = 0; n < numVazio.length; n++) // faz a soma da array
    soma += numVazio[n]
}
numVazio.sort() // resultado na div
resultado.innerHTML += `Ao todo, temos ${numVazio.length} números cadastrados</br></br>`
resultado.innerHTML += `O maior valor informado foi ${Math.max(...numVazio)}</br></br>`// necessário ter os 3 pontos
resultado.innerHTML += `O menor valor informado foi ${Math.min(...numVazio)}</br></br>`// necessário ter os 3 pontos
resultado.innerHTML += `Somando todos os valores, temos ${soma}</br></br>`
resultado.innerHTML += `A média dos valores digitados é ${soma / numVazio.length}`

}

function msgErro(){
    alert('Número repetido, favor escolher outro')
}


