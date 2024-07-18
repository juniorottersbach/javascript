let items = []
const itemsDiv = document.querySelector("div#itens")
const input = document.querySelector("input#itemInput")
const storageKey = "items"
function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
        renderItems()
}
function renderItems() {
    itemsDiv.innerHTML = null
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;
        const button = document.createElement("button")
        button.textContent = "Remover"
        button.onclick = () => removeItem(idx)
        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
} 
function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}
function addItem() {
    const value = input.value
    if (!value) {
        alert("Não podemos adicionar um item vazio")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    input.focus()
    saveItems()
}
function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}
document.addEventListener("DOMContentLoaded", loadItems)