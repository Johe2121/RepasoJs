
let createPassword = prompt("Cree su Contraseña").toLowerCase();

let confirmPassword = prompt("Confirme su Contraseña")

if (confirmPassword === null || confirmPassword === undefined || confirmPassword === "" ) {
	alert("Opcion invalida");
} else {
	confirmPassword = confirmPassword.toLowerCase();
	if (confirmPassword === createPassword) {
		alert("Listo");
	} else {
		alert("Opción no Valida");
	}
}