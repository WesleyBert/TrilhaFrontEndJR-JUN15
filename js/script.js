const buttonDropdown = document.querySelector(".button_header");
const menuDropdown = document.querySelector(".menu_header");
buttonDropdown.addEventListener("click", ()=> menuDropdown.classList.toggle("active"));

const cursoButton = [...document.querySelector(".bloco_button").children];
const cursos = [...document.querySelector(".container_qualificacoes").children];
const educacao = document.querySelector(".educacao");

function esconderCursos () {
    cursos.forEach(curso => {curso.style.display = "none"});
    cursoButton.forEach(button => {button.classList.remove("ativo")});
}

function cursoTarget (id) {
    const cursoCurrent = document.querySelector("#" + id);
    cursoCurrent.style.display = "block"
}

function selecionarCurso () {
    cursoButton.forEach (button => {
        button.addEventListener("click", (target)=> {
            esconderCursos();
            const cursoAtual = target.currentTarget;
            cursoTarget(cursoAtual.dataset.id);
            cursoAtual.className += " ativo"
        })
    })
}
