function dibujo_1 (){
    var elemento_1= document.querySelector('#lienzo_1')
    var forma_1= elemento_1.getContext('2d')

    

    forma_1.beginPath()

    forma_1.moveTo(100,30)
    forma_1.lineTo(150,30)
    forma_1.lineTo(100, 120)
    forma_1.lineTo(150, 120)

    forma_1.closePath()
    forma_1.fillStyle="#ffffff"
    forma_1.fill()
    forma_1.strokeStyle="#000"
    forma_1.lineWidth=2
    forma_1.stroke()

    var elemento_2=document.querySelector('#lienzo_1')
    var forma_2=elemento_2.getContext('2d')
    forma_2.beginPath()
    forma_2.moveTo(200,30)
    forma_2.lineTo(215,30)
    forma_2.lineTo(215, 60)
    forma_2.lineTo(230,60)
    forma_2.lineTo(230,120)
    forma_2.lineTo(185,120)
    forma_2.lineTo(185,60)
    forma_2.lineTo(200,60)
    forma_2.lineTo(200,30)
    forma_2.closePath()
    forma_2.fillStyle="#ffffff"
    forma_2.fill()

    forma_2.strokeStyle="#000"
    forma_2.lineWidth=2
    forma_2.stroke()


   
    
}


window.addEventListener("load", dibujo_1)