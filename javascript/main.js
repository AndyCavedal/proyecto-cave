// console.log('Hello, world!');

const themes = document.querySelector('.boton-temas');
const temasMenu = document.querySelector('.desktop-menu');
const temasMenuCloseButton = document.querySelector('#themes-close-button');
const menu = document.querySelector('#sidebar-hamburguesa');
const hamburguesaMenu = document.querySelector('.menu-hamburguesa');
const hamburguesaMenuFlecha = document.querySelector('.product-detail');
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
var springButton = document.getElementById('spring');
var cieloButton = document.getElementById('cielo');
var caracolButton = document.getElementById('caracol');
var baseButton = document.getElementById('base');

baseButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--naranjita-header' , '#d2b382');
    document.documentElement.style.setProperty('--naranjita-header-oscuro', '#d79b39');
    document.documentElement.style.setProperty('--naranjita-header-claro', '#ffc96d91');
    document.documentElement.style.setProperty('--naranjita-header-intermedio', '#f9b43db7');
    document.documentElement.style.setProperty('--background-clarito', 'white');
})

springButton.addEventListener('click', () => {
    console.log('Boton funcionando!');
    document.documentElement.style.setProperty('--naranjita-header' , '#FED049');
    document.documentElement.style.setProperty('--naranjita-header-oscuro', '#3D5656');
    document.documentElement.style.setProperty('--naranjita-header-claro', '#CFFDE1');
    document.documentElement.style.setProperty('--naranjita-header-intermedio', '#68B984');
    document.documentElement.style.setProperty('--background-clarito', 'white');
});

cieloButton.addEventListener('click', () => {
    console.log('Boton funcionando!');
    document.documentElement.style.setProperty('--naranjita-header' , '#42C2FF');
    document.documentElement.style.setProperty('--naranjita-header-oscuro', '#85F4FF');
    document.documentElement.style.setProperty('--naranjita-header-claro', '#EFFFFD');
    document.documentElement.style.setProperty('--naranjita-header-intermedio', '#B8FFF9');
    document.documentElement.style.setProperty('--background-clarito', 'white');
});


caracolButton.addEventListener('click', () => {
    console.log('Boton funcionando!');
    document.documentElement.style.setProperty('--naranjita-header' , '#594545');
    document.documentElement.style.setProperty('--naranjita-header-oscuro', '#815B5B');
    document.documentElement.style.setProperty('--naranjita-header-claro', '#FFF8EA');
    document.documentElement.style.setProperty('--naranjita-header-intermedio', '#9E7676');
    document.documentElement.style.setProperty('--background-clarito', '#FFF8EA');
    document.documentElement.style.setProperty('--boxes-background', '#9E7676')
});



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