const juegosGustan = document.getElementsByClassName('gusta');
const juegosNoJugados = document.getElementsByClassName('noJugado');

let butJuegosGustan = document.getElementById('BotonJugadosGustan')
    .onclick = () => AlternarElementos(juegosGustan);

let butNoJugados = document.getElementById('BotonQuieroJugar')
    .onclick = () => AlternarElementos(juegosNoJugados);
let butCambiarColores = document.getElementById('BotonCambiarColores')
    .onclick = CambiarColores;

function AlternarElementos(array){
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = array[i].style.display === 'none' ? 
            'block' : 'none';
    }
}

function CambiarColores(){
    Array.from(juegosGustan).forEach((e)=>e.style.color= 'white');
    Array.from(juegosNoJugados).forEach((e)=>e.style.color='rgb(227, 179, 107)');
}
