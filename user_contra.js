function mostrar(){
	document.user_contraseña.contra.type="text";
}
function ocultar(){
	document.user_contraseña.contra.type="password";
}
function enviar(){
	user=document.user_contraseña.user.value;
    contra=document.user_contraseña.contra.value;
    alert("hola");

    if(user.length==0){
    	alert("Error, usuario no encontrado");
    	document.user_contraseña.user.style.background="red";
	}
	else{
		if(c_pass.length==0){
			alert("Error,contraseña incorrecta")
			document.user_contraseña.contra.style.background="red";
		}
		if ((user=="vmanon") && (contra="pasale")){
			location.href="inicio.html"
		}
		else{
			alert("Acceso denegado")

			}
		}
		
	}

function campos_azules(){
	document.user_contraseña.c_cta.style.background="white";
	document.user_contraseña.contra.style.background="white";
}
