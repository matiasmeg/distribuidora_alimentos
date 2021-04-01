var grupoBanner = ['imagenes/img1.jpg', 'imagenes/img2.jpg', 'imagenes/img3.jpg', 
'imagenes/img5.jpg', 'imagenes/img6.png','imagenes/img7.jpg', 'imagenes/img8.jpeg', 'imagenes/img9.jpg']


var imagenes = document.getElementById('imagenCarrusel')

imagenes.src = grupoBanner [0]

indice = 0

function actualizarCarrusel () {

    indice++
    if (indice > (grupoBanner.length-1)){
        indice=0
    }
    
    imagenes.src = grupoBanner[indice]


}

setInterval(actualizarCarrusel, 3000)