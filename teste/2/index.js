const input = document.getElementById('itxt')
const res = document.querySelector('p#res')
function stringRev(str) {
    return str.split('').reverse().join('')
}
function ver() {
    const value = input.value
    const rev = stringRev(value)
    
    if (value === rev) {
        res.innerHTML = `PALÍNDROMO`
    } else {
        res.innerHTML = `NÃO PALÍNDROMO`
    }
    res.innerHTML += `<br>Digitado: ${value}`
    res.innerHTML += `<br>Reverso: ${rev}`
    input.value = ''
    input.focus()
    
}