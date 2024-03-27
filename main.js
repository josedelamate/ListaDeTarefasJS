console.log('Hello World!')
const container = document.querySelector('.container')
const input = document.querySelector('.input')
const addButton = document.querySelector('.add')

function addTarefa (nomeTarefa){
    const itemTarefa = document.createElement('div')
    itemTarefa.classList.add('item')

    const inputTarefa = document.createElement('input')
    inputTarefa.type     = 'text'
    inputTarefa.disabled = true
    inputTarefa.value    = nomeTarefa
    inputTarefa.classList.add('item-input')   

    const btnEditar = document.createElement('button')
    btnEditar.classList.add('editar')
    btnEditar.innerText = 'Editar'
    btnEditar.addEventListener('click',() => editarTarefa(inputTarefa, nomeTarefa))

    const btnRemover = document.createElement('button')
    btnRemover.classList.add('remover')
    btnRemover.innerText ='Remover'
    btnRemover.addEventListener('click',() => deletarTarefa(itemTarefa, nomeTarefa))

    container.appendChild(itemTarefa)
    itemTarefa.appendChild(inputTarefa)
    itemTarefa.appendChild(btnEditar)
    itemTarefa.appendChild(btnRemover)

}

function editarTarefa (input, nomeTarefa) {
    debugger
    aux = input.value
    console.log(aux)
    input.disabled  = !input.disabled 
    if (!input.disabled){
        const index = tasks.indexOf(aux)
        tasks[index] = input.value
        saveTasks()
    }
}

function deletarTarefa (itemTarefa, nomeTarefa) {
    container.removeChild(itemTarefa)
    const index = tasks.indexOf(nomeTarefa)
    tasks.splice(index,1)
    saveTasks()
}

//addTarefa('Exemplo  de Tarefa')

// função validação do input preenchido 
function checkInput(){
    const valorInput = input.value
    if (valorInput !== '' ){
        addTarefa(valorInput)
        tasks.push(valorInput)
        saveTasks()
        input.value = ''
    }else{
        alert('Preencher a Descrição da Tarefa para Adicioná-la!')
        input.focus()
    }
} 

// 
addButton.addEventListener('click',checkInput)

window.addEventListener('keypress',(e) => {
    //console.log(e)
    if (e.key === 'Enter' ){
        checkInput()
    }
})

///Hora de Utilizar o LocalStorage (criação e Carregamento de Tarefas)
const tasks = JSON.parse(window.localStorage.getItem("tasks")) || []
function saveTasks(){
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
}

for (const task of tasks){
    addTarefa(task)
}
