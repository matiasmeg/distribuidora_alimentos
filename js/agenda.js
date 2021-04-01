function grabar(){
    var boton = document.querySelector('#grabar')
    boton.addEventListener('click', nuevaClase)

    mostrarClases()

}

function nuevaClase(){
    var clave= document.querySelector('#clave').value 
    var categoria= document.querySelector('#categoria').value
    var referencia= document.querySelector('#referencia').value
    var fecha= document.querySelector('#fecha').value

    var valores= [categoria, referencia, fecha]

    localStorage.setItem(clave, valores)

    mostrarClases()

}

function mostrarClases(){

    var caja = document.querySelector('#mostrarDatos')

    caja.innerHTML = '<button id="boton_borrar"><a href="#" id="borrar" onclick="borrarTodo()">Borrar todo </a></buton>'

    for(var i=0; i<localStorage.length; i++){

        var id= localStorage.key(i)
        var valor= localStorage.getItem(id)

        caja.innerHTML += '<p>' + id + ')'+' ' + valor +' '+ '</p>'

    }

}

function borrarTodo(){
    localStorage.clear()
    location.reload()
    mostrarClases()
    alert('Contenido eliminado')
   
}

window.addEventListener('load', grabar)