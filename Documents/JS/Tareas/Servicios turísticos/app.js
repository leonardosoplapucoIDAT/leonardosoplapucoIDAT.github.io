//Slider
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides(indice+=n);
}

function positionSlide(n){
    muestraSlides(indice=n);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1);
},15000);

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('mislider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active-", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active-';
}

//MenuAnimation
hamburguer = document.querySelector('.hamburguer')
menu = document.querySelector('.menu')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

hamburguer.addEventListener('click', function(){
    menu.classList.toggle('menu__active')

    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')
})