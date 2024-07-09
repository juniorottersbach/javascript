function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ianonasc')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var gen = ''
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src','imgs/menino.png')
            } else if (idade < 22) {
                img.setAttribute('src','imgs/adulto.png')
            } else if (idade < 55) {
                img.setAttribute('src','imgs/adulto.png')
            } else {
                img.setAttribute('src','imgs/velho.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src','imgs/menina.png')
            } else if (idade < 22) {
                img.setAttribute('src','imgs/adulta.png')
            } else if (idade < 55) {
                img.setAttribute('src','imgs/adulta.png')
            } else {
                img.setAttribute('src','imgs/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectado: ${gen} com ${idade} anos.</p>`
        res.appendChild(img)
        img.style.width = '250px'
    }
}