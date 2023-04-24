 function recargarPagina() {
      location.reload();
    }
function enviar(){
	user=document.formulario1.user.value;
    contra=document.formulario1.contra.value;
    cvv=document.formulario1.cvv.value;
    num=document.formulario1.cvv.value;
    if(cvv.length>4){
	alert("Número de CVV inválido")
	location.reload();
}
	else{
		if(num.length<13){
			alert("Número de tarjeta inválido")
			location.reload();
		}

if(user.length==0){
    	alert("Error, usuario no encontrado");
    	document.formulario1.user.style.background="red";
	}
	else{
		if(contra.length==0){
			alert("Error,contraseña incorrecta")
			document.formulario1.contra.style.background="red";
		}
		if ((user=="vmanon") && (contra="pasale")){
			alert("FELICIDADES, SU COMPRA VA EN CAMINO");
		}
		else{
			alert("Acceso denegado");

			}
}
}
}
