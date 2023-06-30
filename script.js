//-Imagem ou texto de chamada;
//-Campos para preenchimento de nome e e-mail;
//-Botão para enviar o formulário;
//-Opção para queo pop-up não apareça novamente,salvando essa informação em cache;
// -Botão de fechar pop-up. //

// =========================================
// INTERATIVIDADE POPUP
//==========================================


var popup = document.getElementById("popup");
var botaoSeInscreva = document.querySelector("#botaoSeInscreva")
var msg = document.getElementById("message");
var btnReset = document.getElementById("resetPoup");

msg.style.display = "none";

function verificaCadastroEnviado() {
    if (localStorage.getItem('exibicaoPopup') == 'true') {
        botaoSeInscreva.innerHTML = "Inscrito com sucesso!";
        btnReset.style.display = "block";

        return true;
    }
    return false;
}

function openPopup() {
    if (verificaCadastroEnviado()) {
        return;
    }
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

function resetPopup() {
    localStorage.setItem("exibicaoPopup", "false");
    botaoSeInscreva.innerHTML = "Se inscreva!";
    btnReset.style.display = "none";
}

verificaCadastroEnviado();

//========================================
// FUNÇÃO INSCRIÇÃO
//========================================

function cadastrar() {
    event.preventDefault();

    let nome = document.getElementById("campoNome");
    let email = document.getElementById("campoEmail");

    if (nome.value == "" || email.value == "") {
        msg.style.display = "block";
        msg.innerHTML = "Certifique-se que todos os campos foram devidamente preenchidos.";
        setTimeout(() => {
            msg.innerHTML = "";
            msg.style.display = "none";
        }, 5000);

    } else if (nome.value != "" || email.value != "") {
        localStorage.setItem("exibicaoPopup", "true");

        enviarDadosCliente(nome, email)

        // Mensagem de inscrito com sucesso
        msg.style.display = "block";
        msg.innerHTML = "<strong> Inscrito com sucesso! </strong>";
        botaoSeInscreva.innerHTML = "Inscrito com sucesso!";

        // Delay de 5s após efetuar a inscrição
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        alert("Erro na inscrição");
    }
}

document.getElementById('formCadastro').addEventListener('submit', cadastrar);

function enviarDadosCliente(nome, email) {
    const dadosCliente = {
        nome: nome.value,
        email: email.value
    }
    localStorage.setItem("dadosCliente", JSON.stringify(dadosCliente));
}


