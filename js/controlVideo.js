var video = document.querySelector('#ciudad_video')
var botonVer =document.querySelector('#ver')

function reproducir(){

if (video.paused){

        video.play()
        botonVer.innerHTML='<span class="icon-pause2"></span>'

} else{
        video.pause()
        botonVer.innerHTML= '<span class="icon-play3"></span>'
}

}

function detener(){

        video.pause()
        video.currentTime=0
        botonVer.innerHTML= '<span class="icon-play3"></span>'
        
}

function saltar(fotogramas){

        video.currentTime += fotogramas

}


