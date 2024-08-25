// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const mensaje = document.querySelector(".mensaje__campo__texto");
const mensajeEncriptado = document.querySelector(".resultado__campo__texto__encriptado");
const divVacio = document.getElementById("resultado__campo__vacio");
const divResultado = document.getElementById("resultado__campo__texto");
const llavesDeEncriptacion = [["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];

function btnEncriptar() {
    if (validarCaracteres(mensaje.value) == true){
        let textoEncriptado = funcionEncriptar(mensaje.value);
        mensajeEncriptado.innerHTML = textoEncriptado;
        divVacio.style.display = "none";
        divResultado.style.display = "initial";
    }
    else {
        alert("No se aceptan tildes, revisa tu mensaje.");
        mensaje.value = "";
    }
}

function funcionEncriptar(mensajeEncriptar) {
    for (let i = 0; i < llavesDeEncriptacion.length; i++) {
        if (mensajeEncriptar.includes(llavesDeEncriptacion[i][0])) {
            mensajeEncriptar = mensajeEncriptar.replaceAll(llavesDeEncriptacion[i][0], llavesDeEncriptacion[i][1]);
        }
    }
    console.log(mensajeEncriptar);
    return mensajeEncriptar;
}

function btnDesencriptar() {
    if (validarCaracteres(mensaje.value) == true) {
        let textoDesencriptado = funcionDesencriptar(mensaje.value);
        mensajeEncriptado.innerHTML = textoDesencriptado;
        divVacio.style.display = "none";
        divResultado.style.display = "initial";
    }
    else {
        alert("No se aceptan tildes, revisa tu mensaje.");
        mensaje.value = "";
    }
}

function funcionDesencriptar (mensajeDesencriptar) {
    for (let i = 0; i < llavesDeEncriptacion.length; i++) {
        if (mensajeDesencriptar.includes(llavesDeEncriptacion[i][1])) {
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(llavesDeEncriptacion[i][1], llavesDeEncriptacion[i][0]);
        }
    }
    console.log(mensajeDesencriptar);
    return mensajeDesencriptar;
}

function validarCaracteres(mensaje) {
    if (mensaje.includes("á") || mensaje.includes("é") || mensaje.includes("í") || mensaje.includes("ó") || mensaje.includes("ú")) {
        return false;
    }
    return true;
}

function copiarMensaje() {
    mensajeEncriptado.select();
    document.execCommand("copy");
    alert("Mensaje copiado!");
}