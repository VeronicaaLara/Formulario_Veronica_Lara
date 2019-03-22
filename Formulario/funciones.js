
//variables
let user = document.getElementById("user");
let password = document.getElementById("password");

let name = document.getElementById("name");

let zip_code = document.getElementById("zip_code");
let email = document.getElementById("email");

let lenguage1 = document.getElementById("lenguage1");
let lenguage2 = document.getElementById("lenguage2");

let validuser = false;
let validpass = false;
let validnamne = false;
let validemail = false;
let validzipcod = false;
let language = false;



//funcion para validar el usuario con minimo y maximo de caracteres
let valUserLength = function(){
	if (user.value.length >= 5 && user.value.length <=12){
		validuser = true;
	}else{
		alert("usuario incorrecto, debe tener entre 5 y 12 caracteres");
	}
};

let valUserNotEmpty = function(){
	if (user.value.length == 0){
		validuser = true;
	}else{
		alert("usuario incorrecto, el campo usuario no puede estar vacío");
	}
};

user.addEventListener("blur", function(){
  valUserLength();
 
});

user.addEventListener("blur", function(){
  valUserNotEmpty();
});

//funcion para validar la contraseña con un minimo y maximo de caracteres
let valPasswordLength = function(){
	if (password.value.length >= 7 && password.value.length <=12){
		validpass = true;
	}else {
		alert("contraseña incorrecta, debe tener entre 7 y 12 caracteres");
	}
};
let valPasswordNotEmpty = function(){
	if (password.value.length == 0){
		validpass = true;
	}else {
		alert("contraseña incorrecta, el campo contraseña no puede estar vacío");
	}
};

password.addEventListener("blur", function(){
  valPasswordLength();
 
});

password.addEventListener("blur", function(){
  valPasswordNotEmpty();
});


//funcion para validar el nombre 
let valNameNotEmpty = function(){
	if (name.value.lenght == 0){
		alert("nombre incorrecto. debe escribir su nombre");
	}else{
		validnamne = true;
	}
};
name.addEventListener("blur", function(){
  valNameNotEmpty();
});
//funcion para validar el email
let valEmailNotEmpty = function(){
	//define los caracteres permitidos la direccion de email 
	let caracteresemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;;

	if ((caracteresemail.test(email.value) ==0) || (email.value.length = 0)){
		alert("email incorrecto");
	}else{
		validemail = true;
	}
};
name.addEventListener("blur", function(){
  valEmailNotEmpty();
});

let valzipcodNotEmpty = function(){

	if (zip_code.length == 5 && parseInt(zip_code) >=1000 && parseInt(zip_code)>=52999){
		validzipcod = true;
	}else{
		alert ("codigo postal incorrecto")
	}
};

user.addEventListener("blur", function(){
  valzipcodNotEmpty();
});


let vallanguageNotEmpty = function(){
	if (language1.checked = true || language2.checked =true){
		language = true;
	}else{
		alert ("debe seleccionar al menos un idioma");
	}
};

user.addEventListener("blur", function(){
  vallanguageNotEmpty();
});

