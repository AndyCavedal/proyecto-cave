// console.log('Hello, world!');

const themes = document.querySelector('.boton-temas');
const temasMenu = document.querySelector('.desktop-menu');
const temasMenuCloseButton = document.querySelector('#themes-close-button');
const menu = document.querySelector('#sidebar-hamburguesa');
const hamburguesaMenu = document.querySelector('.menu-hamburguesa');
const hamburguesaMenuFlecha = document.querySelector('.sobre-title-container');
var labelTesteo = document.querySelector('.label-hamburguesa');

var labelNamastexId = document.getElementById('label-namastex-seleccionado');
var labelYonoId = document.getElementById('label-yono-seleccionado');
var labelRolCultId = document.getElementById('label-rolcult-seleccionado');

var inputNamastex = document.querySelector('#namastex-label');
var inputYono = document.querySelector('#yono-label');
var inputRolCharacter = document.querySelector('#rol-character-label');
const botonSeleccionarAplicacion = document.querySelector('.primary-button');
var aplicacionActualSpan = document.querySelector('#aplicacion-actual');
var inputsDeHamburguesa = document.querySelector('.inputs-hamburguesa');


botonSeleccionarAplicacion.addEventListener('click', comprobarLabelAplicacion);

inputNamastex.addEventListener('click', marcarInputSeleccionado);
inputYono.addEventListener('click', marcarInputSeleccionado);
inputRolCharacter.addEventListener('click', marcarInputSeleccionado);

// inputsDeHamburguesa.addEventListener('click', marcarInputSeleccionado)

function marcarInputSeleccionado () {
    if (inputNamastex.checked) {
        console.log('namastex clickeado')
        labelNamastexId.classList.add('seleccionado')
        labelYonoId.classList.remove('seleccionado')
        labelRolCultId.classList.remove('seleccionado')
    }
    else if (inputYono.checked) {
        console.log('Yono clickeado')
        labelYonoId.classList.add('seleccionado')
        labelNamastexId.classList.remove('seleccionado')
        labelRolCultId.classList.remove('seleccionado')
        return;
    }
    else if (inputRolCharacter.checked) {
        console.log('rol cult clickeado')
        labelRolCultId.classList.add('seleccionado')
        labelYonoId.classList.remove('seleccionado')
        labelNamastexId.classList.remove('seleccionado')
    }
}

function comprobarLabelAplicacion () {
    if (inputNamastex.checked) {
        console.log('Escojiste Namastex')
        aplicacionActualSpan.textContent = 'Namastex'
        labelNamastexId.classList.add('seleccionado')
        labelYonoId.classList.remove('seleccionado')
        labelRolCultId.classList.remove('seleccionado')
        return;

    }
    else if (inputYono.checked) {
        console.log('Escojiste Yono')
        aplicacionActualSpan.textContent = 'Yo No'
        labelYonoId.classList.add('seleccionado')
        labelNamastexId.classList.remove('seleccionado')
        labelRolCultId.classList.remove('seleccionado')
        return;
    }
    else if (inputRolCharacter.checked) { 
        console.log('Escojiste RolCharacter')
        aplicacionActualSpan.textContent = 'Rol Cult'
        labelRolCultId.classList.add('seleccionado')
        labelYonoId.classList.remove('seleccionado')
        labelNamastexId.classList.remove('seleccionado')
        return;
    }
    else {
        console.log('Porfavor escoje una aplicacion')
    }
}




temasMenuCloseButton.addEventListener('click', toggleThemeMenu)
// themes.addEventListener('click', toggleThemeMenu)

function toggleThemeMenu() {
    temasMenu.classList.toggle('inactive');
}

function toggleHamburguesaMenu() {
    hamburguesaMenu.classList.toggle('inactive');
    hamburguesaMenuFlecha.classList.toggle('inactive')
}