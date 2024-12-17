 const boton = document.getElementById('boton_hamburguesa');
 const cont_menu = document.getElementById('menu');
 

 
 boton_hamburguesa.addEventListener('click', () => {
     if (cont_menu.style.display === 'none') {
         cont_menu.style.display = 'flex'; // Mostrar el div
     } else {
         cont_menu.style.display = 'none'; // Ocultar el div
     }
 });