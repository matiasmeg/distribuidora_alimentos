var nombre = document.getElementById('nombre')

var email= document.getElementById('email')

function validarDatos(){
    nombre.addEventListener('input', validarNombre)
    email.addEventListener('input', validarEmail)
    validarNombre()
    validarEmail()

}

function validarNombre(){

    if (nombre.value==''){
        nombre.style.backgroundColor ='#d9626d';
        nombre.setCustomValidity('Debe ingresar un nombre');  
    } else{
        nombre.style.backgroundColor='#55a656';
        nombre.setCustomValidity('');

    }

}

function validarEmail(){
    if (email.value==''){
        email.style.backgroundColor ='#d9626d';
        email.setCustomValidity('El email debe ser del tipo correo@correo.com');
    } else{
        email.style.backgroundColor='#55a656';
        email.setCustomValidity('');


    }

}

window.addEventListener('load', validarDatos)