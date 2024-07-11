var lista = []
function adicionar(){
    let num = document.querySelector('input#inum')
    let tab = document.querySelector('select#ival')
    if (num.value.length == 0) {
        window.alert('Preencha os campos')
    } else if (Number(num.value) < 1 || Number(num.value) > 100) {
        window.alert('O valor deve ser entre 1 e 100')
    } else {
        let n = Number(num.value)
        lista.push(n)
        let item = document.createElement('option')
        tab.appendChild(item)
        item.text += `Adicionado: ${n}`
    }
}
function finalizar() {
    lista.sort()
    let res = document.querySelector(`p#res`)
    let tam = document.querySelector(`select#ival`)
    if (tam.length < 1) {
        window.alert('Preencha a lista acima')
    } else {
        let ultimo = lista[lista.length -1]
        let soma = 0
        res.innerHTML = `Resultado: `
        res.innerHTML += `<br>Sua lista contém ${lista.length} números.`
        res.innerHTML += `<br>O menor valor é ${lista[0]}.`  
        res.innerHTML += `<br>O maior valor é ${ultimo}.`
        for (let c=0;c<lista.length;c++) {
            soma += lista[c]
        }
        let media = soma / lista.length
        res.innerHTML += `<br>A soma é ${soma}.`
        res.innerHTML += `<br>A media é ${media}.`
    }   
}