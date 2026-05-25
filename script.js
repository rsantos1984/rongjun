let slideAtual = 1;

const totalSlides = 8;

const radios = document.querySelectorAll('input[name="slide"]');

const carrossel = document.querySelector(".carrossel");



/* ========================= */
/* MOSTRAR SLIDE */
/* ========================= */

function mostrarSlide(numero) {

    if (numero > totalSlides) {

        slideAtual = 1;
    }

    else if (numero < 1) {

        slideAtual = totalSlides;
    }

    else {

        slideAtual = numero;
    }

    radios[slideAtual - 1].checked = true;
}



/* ========================= */
/* PRÓXIMO / VOLTAR */
/* ========================= */

function proximoSlide() {

    mostrarSlide(slideAtual + 1);
}


function voltarSlide() {

    mostrarSlide(slideAtual - 1);
}



/* ========================= */
/* AUTOPLAY */
/* ========================= */

setInterval(() => {

    proximoSlide();

}, 20000);




/* ========================= */
/* SWIPE */
/* ========================= */

let inicioX = 0;

let fimX = 0;



/* CELULAR */

carrossel.addEventListener("touchstart", (e) => {

    inicioX = e.touches[0].clientX;
});


carrossel.addEventListener("touchend", (e) => {

    fimX = e.changedTouches[0].clientX;

    detectarSwipe();
});



/* PC */

let segurandoMouse = false;



carrossel.addEventListener("mousedown", (e) => {

    segurandoMouse = true;

    inicioX = e.clientX;
});



carrossel.addEventListener("mousemove", (e) => {

    if (!segurandoMouse) return;

    fimX = e.clientX;
});



carrossel.addEventListener("mouseup", () => {

    if (!segurandoMouse) return;

    segurandoMouse = false;

    detectarSwipe();
});



carrossel.addEventListener("mouseleave", () => {

    segurandoMouse = false;
});



/* ========================= */
/* DETECTAR */
/* ========================= */

function detectarSwipe() {

    let diferenca = inicioX - fimX;



    /* ESQUERDA */

    if (diferenca > 50) {

        proximoSlide();
    }



    /* DIREITA */

    else if (diferenca < -50) {

        voltarSlide();
    }
}