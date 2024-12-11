 // Seleccionar la barra de navegación
 const navbar = document.getElementById('navbar');

 // Agregar evento al hacer scroll
 window.addEventListener('scroll', () => {
   if (window.scrollY > 80) {
     // Si el scroll es mayor a 50px, reducir la barra
     navbar.classList.add('reducida');
   } else {
     // Si el scroll es menor o igual a 50px, restaurar la barra
     navbar.classList.remove('reducida');
   }
 });



 const boton = document.getElementById('boton_hamburguesa');
 const cont_menu = document.getElementById('menu');
 

 
 boton_hamburguesa.addEventListener('click', () => {
     if (cont_menu.style.display === 'none') {
         cont_menu.style.display = 'flex'; // Mostrar el div
     } else {
         cont_menu.style.display = 'none'; // Ocultar el div
     }
 });