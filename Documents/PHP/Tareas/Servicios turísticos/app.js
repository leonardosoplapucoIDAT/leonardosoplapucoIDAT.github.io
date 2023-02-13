//PromoHeightText
promoOne = document.querySelector('.promo-1 .promo-name')
promoTwo = document.querySelector('.promo-2 .promo-name')
promoThree = document.querySelector('.promo-3 .promo-name')
promoFour = document.querySelector('.promo-4 .promo-name')

textOne = document.querySelector('.promo-1 .promo-text')
textTwo = document.querySelector('.promo-2 .promo-text')
textThree = document.querySelector('.promo-3 .promo-text')
textFour = document.querySelector('.promo-4 .promo-text')

promoOne.addEventListener('click', function(){
    textOne.classList.toggle('promo-text__active')
    textTwo.classList.remove('promo-text__active')
    textThree.classList.remove('promo-text__active')
    textFour.classList.remove('promo-text__active')
})

promoTwo.addEventListener('click', function(){
    textOne.classList.remove('promo-text__active')
    textTwo.classList.toggle('promo-text__active')
    textThree.classList.remove('promo-text__active')
    textFour.classList.remove('promo-text__active')
})

promoThree.addEventListener('click', function(){
    textOne.classList.remove('promo-text__active')
    textTwo.classList.remove('promo-text__active')
    textThree.classList.toggle('promo-text__active')
    textFour.classList.remove('promo-text__active')
})

promoFour.addEventListener('click', function(){
    textOne.classList.remove('promo-text__active')
    textTwo.classList.remove('promo-text__active')
    textThree.classList.remove('promo-text__active')
    textFour.classList.toggle('promo-text__active')
})

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
},10000);

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