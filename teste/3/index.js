let segundosPass = 0
let interalo = null
const time = document.getElementById("time")
function padStart(value) {
    return String(value).padStart(2, "0")
}
function setTime() {
    const minutos = Math.floor(segundosPass/60)
    const segundos = segundosPass%60
    time.innerHTML = `${padStart(minutos)}:${padStart(segundos)}`
}
function timer() {
    segundosPass++
    setTime()
}
function startClock() {
    if (interalo) stopClock()
    interalo = setInterval(timer, 1000)
}
function stopClock() {
    clearInterval(interalo)
}
function resetClock() {
    stopClock()
    segundosPass = 0
    setTime()
}