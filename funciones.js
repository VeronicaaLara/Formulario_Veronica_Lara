
//variables
let user = document.getElementById("Usuario");
let password = document.getElementById("Contraseña");
let name = document.getElementById("Nombre");
let address = document.getElementById("Dirección");
let zip_code = document.getElementById("C.P");
let email = document.getElementById("Email");
let about = document.getElementById("Observaciones");
let lenguage1 = document.getElementById("Inglés");
let lenguage2 = document.getElementById("Español");
let submit = document.getElementById("Aceptar");


let validuser = false;
let validpass = false;
let validemail = false;
let validnamne = false;
let validzipcod = false;




//funcion para validar el usuario con minimo y maximo de caracteres
let valuser = function(){
	if (user.value.length >= 5 && user.value.length <=12){
		validuser = true;
	}else{
		alert("usuario incorrecto, debe tener entre 5 y 12 caracteres");
	}
};
//funcion para validar la contraseña con un minimo y maximo de caracteres
let valpassword = function(){
	if (password.value.length >= 7 && password.value.length <=12){
		validpass = true;
	}else {
		alert("contraseña incorrecta, debe tener entre 7 y 12 caracteres");
	}
};
//funcion para validar el nombre 
let valname = function(){
	let alfabeto = /^[a-zA-Z\s]*$/;
	if (name.value.lenght(alfabeto) == 0){
		alert("nombre incorrecto.Solo vocales");
	}else{
		validnamne = true;
	}
	
};
//funcion para validar el email
let valemail = function(){
	//define los caracteres permitidos la direccion de email 
	let caracteresemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;;

	if ((caracteresemail.test(email.value) ==0) || (email.value.length = 0)){
		alert("email incorrecto");
	}else{
		validemail = true;
	}
};

let valzipcod = function(){
	//define los numeros para un codigo postal
	let nums = /(^([0-9]{5,5})|^)$/;

	if (!(nums.test(zip_code.value))){
		alert("codigo postal incorrecto");
	}else{
		valzipcod = true;
	}
};

let valanguage = function(){
	let language = false;

	if (language1.checked = true){
		
	}if (language2.checked =true){
		language = true;

	}else{
		alert ("debe seleccionar al menos un idioma");
	}
};
let valabout = function(){
	if (about.value.length >= 241){
		alert("demasiados caracteres");
	}else{
		validabout = true;
	}

};
submit.onclik = function(){
	if ((validuser.value = 0) && (validpass.value = 0) && (validnamne.value = 0) && (validzipcod.value = 0) && (valemail.value = 0)){
		alert ("faltan campos por rellenar");
	}else{
		alert("formulario correcto");
	}
}

user.addEventListener("blur", valduser);
password.addEventListener("blur", valpassword);
email.addEventListener("blur", valemail);
name.addEventListener("blur", valname);
zip_code.addEventListener("blur", valzipcod);

