document.querySelector("#salvar").addEventListener("click", cadastrar)

let questoes = []

window.addEventListener("load", () => {
    questoes = JSON.parse(localStorage.getItem("questoes")) || []
    atualizar()
})

function atualizar() {
    document.querySelector("#questoes").innerHTML = ""
    questoes.forEach(questao =>
        document.querySelector("#questoes").innerHTML += criarCard(questao))
}

function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const pontos = document.querySelector("#pontos").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const questao = { //JSON Java Script Object Notation
        titulo,
        pontos,
        categoria
    }

    if (!isValid(questao.titulo, document.querySelector("#titulo"))) return
    if (!isValid(questao.pontos, document.querySelector("#pontos"))) return

    questoes.push(questao)
    localStorage.setItem("questoes", JSON.stringify(questoes))

    atualizar()
    modal.hide()
}

function isValid(valor, campo) {
    if (valor.length == 0) {
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    } else {
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}

function apagar(botao) {
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(questao) {
    const card = `
    <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="card">
        <div class="card-header">
            ${questao.titulo}
        </div>
        <div class="card-body">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text">${questao.categoria}</p>
            <span class="badge text-bg-warning">${questao.pontos}pt</span>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-success" title="marcar como concluída">
                <i class="bi bi-check2"></i>
            </a>
            <a href="#" onClick="apagar(this)" class="btn btn-danger" title="apagar questao">
                <i class="bi bi-trash3"></i>
            </a>
        </div> <!-- card footer -->
    </div> <!-- card -->
</div> <!-- col -->
    `
    return card
}