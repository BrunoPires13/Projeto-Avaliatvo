//FUNÇÃO PARA VERIFICAR PREENCHIMENTO DE CAMPOS DO FORMULÁRIO
function verificar(){
var email = document.getElementByid ("email").value;
var cpf = document.getElementByid ("cpf").value;
var name = document.getElementByid ("name").value;
var dn = document.getElementByid ("dn").value;
var cellphone = document.getElementByid ("cellphone").value;
var password = document.getElementByid ("password").value;
var cep = document.getElementByid ("cep").value;
var number = document.getElementByid ("number").value;
var complement = document.getElementByid ("complement").value;

//|| !cpf || !name || !dn || !cellphone || !password || !cep || !number || !complement
if (!email){
alert("Campos não preenchidos, favor preenchê-los");                                            
} else { 
	alert ("Campos preenchidos com sucesso");
	 }
               
}