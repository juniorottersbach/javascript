function mostrar() {
    let num = document.querySelector('input#inum')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        res.innerHTML = `Insira um número!`
    } else {
        res.innerHTML = `Resultado: `
        let gua
        let i = Number(num.value)
        for (let c=0;c<=10;c++) {
            gua = i*c
            res.innerHTML += `<br>${i} x ${c} = ${gua}`           
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}