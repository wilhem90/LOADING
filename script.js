
const escolha = document.getElementById("escolha")
const loada = document.getElementById("loada")
const containerModal = document.querySelector(".containerModal")

escolha.addEventListener("change", (e) => {
    const el = e.target
    showModal(el.value)
})


function showModal(intervalo) {
    containerModal.style.visibility = "visible"
    setTimeout(() => {
        containerModal.style.visibility = "hidden"
        escolha.selectedIndex = 0
    }, intervalo)
}


