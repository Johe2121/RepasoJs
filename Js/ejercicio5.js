let userName = prompt("Ingresa tu nombre");

function mostrarMensaje(name) {
    if (userName === null || userName === undefined || userName === "") {
        alert("Opcion invalida");        
    } else {
        userName = userName.toLowerCase();
        alert("¡Hola, " + userName + "! Espero que estés disfrutando de JavaScript.");
    }
    
}
