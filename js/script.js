'use strict';

let opt = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true
}

const swiper = new Swiper('.swiper', opt);

let form = document.querySelector('form')

form.addEventListener('submit',(e) => {

    e.preventDefault();
    Swal.fire({
        title: "<i>Mensaje Enviado</i>",
        html: "<b>Gracias</b>, pronto seras contactado por nosotros",
        confirmButtonText: "OK",
        confirmButtonColor: '#ffcf1f',
        confirmButtonTextColor: "#000",
    });

});