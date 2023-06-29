//-Imagem ou texto de chamada;
//-Campos para preenchimento de nome e e-mail;
//-Botão para enviar o formulário;
//-Opção para queo pop-up não apareça novamente,salvando essa informação em cache;
// -Botão de fechar pop-up. //

// =========================================
// INTERATIVIDADE POPUP
//==========================================
let popup = document.getElementById("popup");

function openPopup(){
popup.classList.add ("open-popup");
}
function closePopup(){
    popup.classList.remove ("open-popup");
    }
//========================================
// FUNÇÃO INSCRIÇÃO
//========================================
let nome = document.getElementById('campoNome');
let email = document.getElementById('campoEmail');
let btnSalvar = document.getElementById('botaoInscreva');

function cadastrar(){
    
    if  (nome.value == "" || email.value == "") {
        alert("Certifique-se que todos os campos foram devidamente preenchidos.");
    } else if (nome.value != "" || email.value != "") {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')    
        listaUser.push (
            {
                nomeCad: nome.value,
                userCad: email.value,
            }
            )
            
            localStorage.setItem('listaUser', JSON.stringify(listaUser));
            
            // Mensagem de inscrito com sucesso
            msg.setAttribute('style', 'background-color: #7efc00');
            msg.innerHTML = "<strong> Inscrito com sucesso! </strong>"


        // Delay de 1s após efetuar a inscrição
        setTimeout(() => {
            location.reload();
          }, 1000);
   
    }
     else {
        alert("Erro na inscrição");
    }
  if 

}
