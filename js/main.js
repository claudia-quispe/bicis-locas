function validateForm(){

	//*DEFINIR VARIABLES//*
	//* en html label for="name".. //* 
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var tipo_bicicleta=document.getElementsByTagName('select')[0].value;

	//* == : compara igualdad //*
	//* || : ó //*
	//* != : es distinto a..//*

	//*DIFINIR CONDICIONES//*
	//* NOMBRE //*
	if(nombre == ""){
		alert("Hey, ingresa tu nombre!");
		return;
	}
	if(!nombre.match(/^[a-zA-Z]+$/)){
		alert("Sólo caracteres de la A a Z");
		return;
	}
	if(nombre[0]!=nombre[0].toUpperCase()){
		alert("La primera letra debe ser en mayuscula");
		return;
	}

	//* APELLIDO //*
	if(apellido == ""){
		alert("Como sabremos quien eres?, ingresa tu apellido");
		return;
	}
	if(!apellido.match(/^[a-zA-Z]+$/)){
		alert("Solo caracteres de la A a la Z");
		return;
	}
	if(apellido[0]!=apellido[0].toUpperCase()){
		alert("Tu apellido debe comenzar en mayuscula");
		return;
	}

	//* EMAIL //*
	if(email == ""){
		alert("Ingresa tu correo");
		return;	
	}
	if(!email.match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)){
		alert("Ingresa un formato válido Ej: email@domain.com");
		return;
	}

	//* PASSWORD //*
	if(password == ""){
		alert("No te olvides del Password");
		return;	
	}
	if(password.length <6){
		alert("Password solo debe contener al menos 6 caracteres");
		return;
	}
	if(!password.lenght == "password" || "123456" || "098754"){
		alert("Ingresa un password correcto");
		return;
	}

	//* BICICLETAS //*
	if(tipo_bicicleta == ""){
		alert("Escoge una de las opciones");
		return;
	}
}