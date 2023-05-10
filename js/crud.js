document.querySelector("#salvar").addEventListener("click", cadastrar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    atualizar()
})

function atualizar(){
    document.querySelector("#tarefas").innerHTML = ""
    tarefas.forEach(tarefa => 
        document.querySelector("#tarefas").innerHTML += criarCard(tarefa))
}

function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const pontos = document.querySelector("#pontos").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = { //JSON Java Script Object Notation
        titulo,
        pontos,
        categoria
    }

    if (!isValid(tarefa.titulo, document.querySelector("#titulo"))) return
    if (!isValid(tarefa.pontos, document.querySelector("#pontos"))) return

    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    atualizar()
    modal.hide()
}

function isValid(valor, campo){
    if(valor.length == 0){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(tarefa) {
    const card = `
    <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card">
        <div class="card-header">
            Pergunta 1
        </div>
        <div class="card-body">
            <p class="card-text">Qual é o nome do primeiro álbum solo da Beyoncé?</p>
            <form>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz1" id="quiz1Option1" value="option1">
                    <label class="form-check-label" for="quiz1Option1">
                        Dangerously in Love
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz1" id="quiz1Option2" value="option2">
                    <label class="form-check-label" for="quiz1Option2">
                        Renaissance
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz1" id="quiz1Option2" value="option2">
                    <label class="form-check-label" for="quiz1Option2">
                        B'Day
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz1" id="quiz1Option2" value="option2">
                    <label class="form-check-label" for="quiz1Option2">
                        Lemonade
                    </label>
                </div>
        </div>
    </div>
</div>
    ` 
    return card
}