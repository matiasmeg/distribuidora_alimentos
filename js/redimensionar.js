var tamanios = ['12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px', '30px']

var inicio = 4

var caja = document.getElementById('texto_catalogo')

function agrandarTexto() {

    if (inicio < (tamanios.length - 1)) {

        inicio++
        caja.style.fontSize = tamanios[inicio]

    }

}

function disminuirTexto() {

    if (inicio > 0) {

        inicio--
        caja.style.fontSize = tamanios[inicio]

    }

}