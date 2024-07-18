const body = document.querySelector("body")
function trocaCor(c) {
    body.style.backgroundColor = c;
}
function aleaCor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const cor = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = cor;
}