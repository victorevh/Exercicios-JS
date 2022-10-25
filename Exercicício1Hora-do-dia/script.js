function carregar() {
    var info = window.document.getElementById('info')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Morning!!!
        info.innerHTML = `Tenha um ótimo dia!`
        img.src = './assets/photos/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Evening!!!
        info.innerHTML = `Tenha uma ótima Tarde!`
        img.src = './assets/photos/evening.png'
        document.body.style.background = '#b9846f'
    } else {
        // Night!!!
        info.innerHTML = `Tenha uma ótima Noite!`
        img.src = './assets/photos/night.png'
        document.body.style.background = '#515154'
    }
    
    var footerMsg = window.document.getElementById('footerMsg')
    footerMsg.innerHTML = `&copy; Victor Oliveira`

}
