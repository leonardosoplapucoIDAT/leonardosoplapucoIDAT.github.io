hamburguer = document.querySelector('.hamburguer')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

menu = document.querySelector('.menu')

hamburguer.addEventListener('click', function(){
    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')

    menu.classList.toggle('menu__active')
})