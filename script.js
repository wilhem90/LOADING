// const escolha = document.getElementById("escolha")
const loada = document.getElementById("loada")
const containerModal = document.querySelector(".containerModal")
const navBar = document.getElementById("navBar")
const footer = document.getElementById("footer")
const container = document.getElementById("container")

window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch("/components/navbar.html")
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseText = await response.text()
        navBar.innerHTML = responseText
        clearTimeout(showModal())
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await fetch("./components/footer.html")
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseText = await response.text()
        footer.innerHTML = responseText
        clearTimeout(showModal())
    } catch (error) {
        console.log(error);
    }

})


// A funcão para mostrar modal
function showModal(intervalo) {
    containerModal.style.visibility = "visible"
    setTimeout(() => {
        containerModal.style.visibility = "hidden"
    }, intervalo)
}

// funcão para motrar corpo da pagina user

async function getUsers() {
    showModal(30000)
    try {
        const reponse = await fetch("./db/user.json")
    const data = await reponse.json()
    criatabela(data)
    } catch (error) {
        console.log(error);
    }
    clearTimeout(showModal())
}


function createElement(element) {
    const elementCriated = document.createElement(element)
    return elementCriated
}

// funcao para criar tabela
function criatabela(data) {
    let id = 0
    container.innerHTML = ''
    const table = createElement("table")
    const tr = createElement("tr")
    const th1 = createElement("th")
    th1.innerHTML = "ID"
    tr.appendChild(th1)

    const th2 = createElement("th")
    th2.innerHTML = "NOME"
    tr.appendChild(th2)

    const th3 = createElement("th")
    th3.innerHTML = "CPF"
    tr.appendChild(th3)

    const th4 = createElement("th")
    th4.innerHTML = "IDADE"
    tr.appendChild(th4)

    const th5 = createElement("th")
    th5.innerHTML = "MAE"
    tr.appendChild(th5)

    const th6 = createElement("th")
    th6.innerHTML = "SEXO"
    tr.appendChild(th6)

    table.appendChild(tr)
    for (const user of data) {
        id++;
        const tr = createElement("tr")
        const td1 = createElement("td")
        td1.innerText = id
        tr.appendChild(td1)

        const td2 = createElement("td")
        td2.innerHTML = user.nome
        tr.appendChild(td2)

        const td3 = createElement("td")
        td3.innerHTML = user.cpf
        tr.appendChild(td3)

        const td4 = createElement("td")
        td4.innerHTML = user.idade
        tr.appendChild(td4)

        const td5 = createElement("td")
        td5.innerHTML = user.mae
        tr.appendChild(td5)

        const td6 = createElement("td")
        td6.innerHTML = user.sexo
        tr.appendChild(td6)
        table.appendChild(tr)
    }
    container.appendChild(table)
}