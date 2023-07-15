/* const ligar = document.getElementById('liga');
const desligar = document.getElementById('desliga');
const lampada = document.getElementById('lampada');

function lampadaQuebradaPermanece (){
    return lampada.src.indexOf ('quebrada') > -1
}

function lampadaLigada() {
    if (!lampadaQuebradaPermanece ()){
        lampada.src = './img/ligada.jpg';
    }
}

function lampadaDesligada() {
    if (!lampadaQuebradaPermanece ()){
        lampada.src = './img/desligada.jpg';
    }
}

function lampadaQuebrada() {
    lampada.src = './img/quebrada.jpg';
}

ligar.addEventListener( 'click', lampadaLigada );
desligar.addEventListener( 'click', lampadaDesligada );
lampada.addEventListener( 'mouseover', lampadaLigada);
lampada.addEventListener( 'mouseleave', lampadaDesligada);
lampada.addEventListener( 'dblclick', lampadaQuebrada); */

let button = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener('mouseover', function () {
button.style.position = "absolute";
button.style.top = Math.random() * height + "px";
button.style.left = Math.random() * width + "px";