console.log("Estoy en un archivo dentro de public/js");
window.addEventListener("load", function(){
    let formulario = document.querySelector("form.reservation");

    formulario.addEventListener("submit", function(e){

    let errores = [];

    let campoEmail = document.querySelector("#email");

    if (campoEmail.value == ""){
        errores.push("Debes ingresar tu email");   
    } else if (campoEmail.length < 7) {
        errores.push("Ingrese un formato de email válido: mail@mail.com");
    }

    let campoPassword = document.querySelector("#password");

    if (campoPassword.value == ""){
        errores.push("Debes ingresar tu contraseña");
    }
    
    if (errores.length > 0){
        e.preventDefault();

        let ulErrores = document.querySelector("div.errores ul");
        ulErrores.style.color = "red";
             for (let i = 0; i < errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }

   });
})
