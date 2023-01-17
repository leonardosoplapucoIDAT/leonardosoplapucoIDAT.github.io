//Hamburguer
hamburguer = document.querySelector('.hamburguer')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

menu = document.querySelector('.menu')

hamburguer.addEventListener('click', function(){
    lineOne.classList.toggle('line-1_active')
    lineTwo.classList.toggle('line-2_active')
    lineThree.classList.toggle('line-3_active')

    menu.classList.toggle('menu_active')
})

menu.addEventListener('click', function(){
    lineOne.classList.remove('line-1_active')
    lineTwo.classList.remove('line-2_active')
    lineThree.classList.remove('line-3_active')

    menu.classList.remove('menu_active')
})