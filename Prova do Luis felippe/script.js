let btnAdicionar = document.getElementById("btnAdicionar")
let Lista = document.getElementById("lista")
let input = document.getElementById("input")

btnAdicionar.addEventListener ("click", function(){
  
    let AdicionarTarefa = document.createElement("li")
    AdicionarTarefa.textContent = input.value
    Lista.appendChild(AdicionarTarefa)

    //Botao pra remover item da lista 
    
    let ButtonRemove = document.createElement("button")
    AdicionarTarefa.appendChild(ButtonRemove)
    ButtonRemove.textContent = "X"
    ButtonRemove.classList.add("remove")

    ButtonRemove.addEventListener ("click", function(){
    AdicionarTarefa.remove()
    
  })
})
