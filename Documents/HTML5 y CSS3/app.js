//MenuAnimation
hamburguer = document.querySelector('.hamburguer')

lineOne = document.querySelector('.line-1')
lineOTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

menuContainer = document.querySelector('.menu__container')
menu = document.querySelector('.menu')
menuWhite = document.querySelector('.menu__space')

hamburguer.addEventListener('click', function(){
    lineOne.classList.toggle('line-1__active')
    lineOTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')

    menuContainer.classList.toggle('menu__container__active')
    menu.classList.toggle('menu__active')
})

menuWhite.addEventListener('click', function(){
    lineOne.classList.remove('line-1__active')
    lineOTwo.classList.remove('line-2__active')
    lineThree.classList.remove('line-3__active')

    menuContainer.classList.remove('menu__container__active')
    menu.classList.remove('menu__active')
})