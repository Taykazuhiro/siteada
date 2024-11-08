
// document. é só pra dizer para o navegador que ele precisar "ler" o documento que ele está inserido. 
// O que vem após o ponto (.) são os métodos - COMO/O QUE o navegador vai fazer. No caso do método getElementById ele precisa de um parâmetro que fica entre ()
// Nem todo método precisa de parâmetro. 
// leia como: Dentro do document que você está, faça o seguinte método: pegue o elemento que tem o ID ("bt-enviar"), nele adicione
// um ouvidor de eventos que quando ele ouvir ("click") ele faça a função validaformulario 
document.getElementById("bt-enviar").addEventListener("click",validaFormulario)
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("phone");
// function cria funções. Dentro dos métodos cada um tem sua função, ou seja, cada um faz o seu trabalho. 
// Quando eu crio uma função eu estou ensinando como fazer o trabalho. Depois que eu ensinei como fazer o trabalho, eu posso adicionar
// essa função em outros métodos (posso colocar ele para trabalhar em outros lugares)
function validaFormulario() {
    // quando eu coloco .value nesse método eu estou dizendo que eu quero que ele LEIA o valor que está ali dentro do campo
    if (nome.value != "" && email.value != "" && telefone.value != ""){
        alert("Prontinho! Você receberá as novidade por email!")
        }else{
            alert("Por favor, preencha os campos nome e email")
        }
}