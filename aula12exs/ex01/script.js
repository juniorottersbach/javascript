function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `Bom dia!`
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#fdd185'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/tarde.jpg'
        msg.innerHTML += `Boa tarde!`
        document.body.style.background = '#6d90b1'
    } else {
        img.src = 'imgs/manha.jpg'
        msg.innerHTML += `Boa noite!`
        document.body.style.background = '#10101d'
    }
} 