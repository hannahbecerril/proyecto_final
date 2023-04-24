function enviar(){
	user=document.user_contrasena.user.value;
    contra=document.user_contrasena.contra.value;
if(user.length==0){
    	alert("Error, usuario no encontrado");
    	document.user_contrasena.user.style.background="red";
    	location.reload();
	}
	else{
		if(contra.length==0){
			alert("Error,contraseña incorrecta")
			document.user_contrasena.contra.style.background="red";
			location.reload();
		}
		if ((user=="vmanon") && (contra=="pasale")){
			location.href="catalogo.html"
		}
		else{
			alert("Acceso denegado")
			location.reload();

			}
}
}
