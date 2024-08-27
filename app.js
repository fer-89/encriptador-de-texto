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
const regex = new RegExp("[^abcdefghijklmnñopqrstuvwxyz!¡¿?,. ]");

function btnEncriptar() {
    if (validarCaracteres(mensaje.value) == true){
        let textoEncriptado = funcionEncriptar(mensaje.value);
        mensajeEncriptado.innerHTML = textoEncriptado;
        divVacio.style.display = "none";
        divResultado.style.display = "initial";
    }
    else {
        alert("Solo se aceptan caracteres a-z , . ¡! y ¿?, revisa tu mensaje!");
        mensaje.value = "";
        mensajeEncriptado.innerHTML = "";
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
        alert("Solo se aceptan caracteres a-z , . ¡! y ¿?, revisa tu mensaje!");
        mensaje.value = "";
        mensajeEncriptado.innerHTML = "";
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
    // Validar si mensaje contiene caracteres especiales
    if (regex.test(mensaje) == true) {
        console.log("contiene caracteres especiales");
        return false;
    }
    return true;
}

function copiarMensaje() {
    mensajeEncriptado.select();
    document.execCommand("copy");
    alert("Mensaje copiado!");
}