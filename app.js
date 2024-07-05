function encriptar(){    
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_2");
    let parrafo = document.getElementById("parrafo");
    //let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")                  
        .replace(/u/gi, "ufat")

  if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado
    tituloMensaje.textContent = "Texto encriptado correctamente!";
    parrafo.textContent = "";
    muñeco.src = ".logo.png";
     }  else {       
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert ("No has seleccionado ningun texto para encriptar");
     }
     }
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_2");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
       .replace(/enter/gi, "e")      
       .replace(/imes/gi, "i")
       .replace(/ai/gi, "a")
       .replace(/ober/gi, "o")
       .replace(/ufat/gi, "u");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "El texto se ha desencriptado correctamente!";
        parrafo.textContent = "";
        muñeco.src = ".logo.png";
    } else{
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert ("Selecciona el texto para desencriptar");
    }
}