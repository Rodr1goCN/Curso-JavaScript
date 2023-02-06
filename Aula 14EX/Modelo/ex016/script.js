function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('[ERROR] Faltam dados!')
    } else {
        
    
    res.innerHTML = 'contando: </br>'
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passos.value)
    if (n3 <= 0){
        window.alert('Passo inválido! PASSO será = 1')
        n3 = 1
    }
    
    if (n1 < n2){
        //Contagem crescente / let = var e vice versa
        for(let c = n1; c <= n2; c += n3){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        
    }else {
      
        //Contagem regressiva / let = var e vice versa            
        for(let c = n1; c >= n2; c -= n3){
            res.innerHTML += ` ${c} \u{1F449} `
        }
        
    }
    
    res.innerHTML += ` \u{1F3C1}`

    
  }
}