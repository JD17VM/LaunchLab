function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
  }

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}


/*button1.addEventListener('click', function() {
    alert('¡Hiciste clic en el Botón 1!');
  });*/

const button_cerrar = document.getElementById('button_cerrar');

button_cerrar.addEventListener('click', hideOverlay);



