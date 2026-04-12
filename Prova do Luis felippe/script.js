let btnAdicionar = document.getElementById("btnAdicionar")
let Lista = document.getElementById("lista")
let input = document.getElementById("input")

    //lista de tarefas

btnAdicionar.addEventListener("click", function(){

        if (input.value.trim() === ""){
        alert("Digite uma musica, por favor")

        return; 
        }

    let AdicionarTarefa = document.createElement("li")
    AdicionarTarefa.textContent = input.value

    let ButtonRemove = document.createElement("button")
    ButtonRemove.textContent = "X"
    ButtonRemove.classList.add("remove")

    ButtonRemove.addEventListener("click", function(){
        AdicionarTarefa.remove()
    })

    AdicionarTarefa.appendChild(ButtonRemove)
    Lista.appendChild(AdicionarTarefa)

    input.value = ""
})

    //botao de reset de td a lista

   let buttonReset = document.createElement("button")
    buttonReset.textContent = "Resetar"
    buttonReset.classList.add("reset")

    document.querySelector(".controls").appendChild(buttonReset)

    buttonReset.addEventListener("click", function () {
    Lista.innerHTML = ""
})


