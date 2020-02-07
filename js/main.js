function validateForm(){

	//*DEFINIR VARIABLES//*
	//* en html label for="name".. //* 
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var tipo_bicicleta=document.getElementsByTagName('select')[0];

	//* == : compara igualdad //*
	//* || : ó //*
	//* != : es distinto a..//*
	// ! = negacion //*

	//*DIFINIR CONDICIONES//*

	//*SE CREA UNA FUNCION DE ALERTA PARA TODAS LAS VARIABLES //*

	//*function alertar(mensaje, elem) {
	//*var span = document.createElement('span');
	//*span.innerHTML = mensaje;
	//*elem.parentNode.appendChild(span);
	//*}

	//* SE CREA FUNCION PARA ELIMINAR LAS ALERTAS //*
	function alertar(mensaje, elem) {
		var span = element.parentNode.children[2];
		if (!span) { // si span no existe, entonces lo creo
			var span = document.createElement('span');
		}
		span.innerHTML = mensaje;
		elem.parentNode.appendChild(span);
	}

	function remove(element){
		var span = element.parentNode.children[2];
		if(!span) {return};
		element.parentNode.removeChild(span);
	}
	//* appendChild = agregar un hijo //*

	//* VALIDAR UN NOMBRE//*



	//* NOMBRE //*
	if(nombre.value.length == 0){
		alertar('Debes escribir un nombre', nombre);
	}
	else if(!nombre.value.match(/^[a-zA-Z]+$/)){
		alertar('El nombre solo debe contener letras', nombre);
	}
	else if(nombre.value[0]!=nombre.value[0].toUpperCase()){
		alertar('La primera letra debe ser en mayuscula', nombre);
	}

	//* APELLIDO //*
	if(apellido.value.length == 0){
		alertar('Como sabremos quien eres?, ingresa tu apellido', apellido);
	}
	else if(!apellido.value.match(/^[a-zA-Z]+$/)){
		alertar('Solo caracteres de la A a la Z', apellido);
	}
	else if(apellido.value[0]!=apellido.value[0].toUpperCase()){
		alertar('Tu apellido debe comenzar en mayuscula', apellido);
	}

	//* EMAIL //*
	if(email.value.length == 0){
		alertar('Ingresa tu correo', email);
	}
	else if(!email.value.match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)){
		alertar('Ingresa un formato válido Ej: email@domain.com', email);
	}

	//* PASSWORD //*
	if(password.value.length == 0){
		alertar('No te olvides del Password', password);
	}
	else if(password.value.length <6){
		alertar('Password solo debe contener al menos 6 caracteres', password);
	}
	else if(!password.value.lenght == "password" || "123456" || "098754"){
		alertar('Ingresa un password correcto', password);
	}

	//* TIPO_BICICLETAS //*
	if (tipo_bicicleta.value == null || tipo_bicicleta.value == 0){
		alertar('Escoge una de las opciones', tipo_bicicleta);
	}
}