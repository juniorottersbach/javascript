function contar() {
    let n1 = document.getElementById('inum1') 
    let n2 = document.getElementById('inum2')
    let n3 = document.getElementById('ipas')
    let res = document.getElementById('res')
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        res.innerHTML = `Não foi possível contar`
    } else {
        res.innerHTML = `Resultado: <br>`
        let i = Number(n1.value)
        let f = Number(n2.value) //os numeros precisam ser convertidos usando o Number()
        let p = Number(n3.value)
        if (p <= 0) {
            window.alert('Passo invalido, considerando como 1')
            p = 1
        }
        if (i < f) { //contagem crescente
            for (let c=i;c<=f;c+=p) {
                res.innerHTML += ` → ${c}`
            }
        } else { //contagem decrescente
            for (let c=i;c>=f;c-=p) {
                res.innerHTML += ` → ${c}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}