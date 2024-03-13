console.log('Hello World!')
const container = document.querySelector('.container')
const input = document.querySelector('.input')
const addButton = document.querySelector('.add')

function addTarefa (nomeTarefa){
    const itemTarefa = document.createElement('div')
    itemTarefa.classList.add('item')
    //console.log(itemTarefa)

    const inputTarefa = document.createElement('input')
    inputTarefa.type     = 'text'
    inputTarefa.disabled = true
    inputTarefa.value    = nomeTarefa
    inputTarefa.classList.add('item-input')   
    //console.log(inputTarefa)  

    const btnEditar = document.createElement('button')
    btnEditar.classList.add('editar')
    btnEditar.innerText = 'Editar'
    btnEditar.addEventListener('click',() => editarTarefa(inputTarefa, nomeTarefa))
    //onsole.log(btnEditar) 

    const btnRemover = document.createElement('button')
    btnRemover.classList.add('remover')
    btnRemover.innerText ='Remover'
    btnRemover.addEventListener('click',() => deletarTarefa(itemTarefa, nomeTarefa))
    //console.log(btnRemover) 

    container.appendChild(itemTarefa)
    itemTarefa.appendChild(inputTarefa)
    itemTarefa.appendChild(btnEditar)
    itemTarefa.appendChild(btnRemover)

}

function editarTarefa (input, nomeTarefa) {
    console.log('editar......')
}

function deletarTarefa (container, nomeTarefa) {
    console.log('remover ......')
}


addTarefa('Exemplo  de Tarefa')
