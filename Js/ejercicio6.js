let name = prompt("Ingrese su nombre");
let ageUser = parseInt(prompt("Ingrese si edad"));
let country = prompt("Ingrese su país");
let state = prompt("Ingrese su estado");

if (name === null || name === undefined || name === "" && (ageUser === null || ageUser === undefined) && (country === null || country === undefined) && state === null || state === undefined) {
	alert("Por Favor Introduzca los Datos Solicitados");
} else {
	name = name.toLowerCase();
	country = country.toLowerCase();
	state = state.toLowerCase();

	if (ageUser >= 18 && (country === "canada" || country === "canadá") && state === "toronto") {
		alert("¡ Felicidades ! Usted Cumple los Requisitos para la Beca");
	} else {
		alert("Lamentablemente Usted no Cumple con los Requisitos");
	}
}