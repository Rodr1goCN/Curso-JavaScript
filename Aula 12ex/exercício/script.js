var intervald = window.setInterval(() => {carregar()
},1000);
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
   // var hora = 9
  
    
    function hora() {
       function pad(s){
        return (s < 10) ? '0' + s : s;
    }
        var date = new date();
        return [date.getHours(), date.getMinutes(), date.getSeconds()].map(pad).join(':');
    }

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
    
        
    if (hora >= 0 && hora < 12){
        img.src = 'manhafoto.png'
        document.body.style.background = '#e7ddcb'
        
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tardefoto.png'
        document.body.style.background = '#bd723a'
    } else {
        img.src = 'noitefoto.png'
        document.body.style.background = '#0a2f59'
    }
    //#482012
    //#233f45
}

