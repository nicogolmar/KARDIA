/*----------------------------------------------------------

FUNCIONES PARA EL MENU PRINCIPAL

----------------------------------------------------------*/





$(function() {
	
$('#menu-navegacion .navbar-toggler').click(function() {

$('.boton-menu').toggleClass('icono-cerrar')
	
});


/*
Al hacer click se cierra el menu y hace scroll.


*/

$('#menu-principal .navbar-nav a').click(function() {


/*quita la clase icono-cerrar*/

$('.boton-menu').removeClass('icono-cerrar')

/*Contraer el menu*/


$('#menu-navegacion .navbar-collapse').collapse('hide');

});




var swiper = new Swiper('.swiper-container', {
      

	slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'fade',
      pagination: {
        el:'.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
       autoplay: {
    delay: 4000,
  },
    });





$('#menu-navegacion').stickit({

className:'menu-fijo'

});


$('#menu-principal li a').mPageScroll2id({
offset: 100,
highlightClass:'active'

});


})