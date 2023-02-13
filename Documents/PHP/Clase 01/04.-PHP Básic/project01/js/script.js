//Script del Menu Hamburguesa
    function llamar(){
           let botonera=document.getElementById("botonera");
               botonera.classList.toggle("botonera-open");
           let menu=document.getElementById("menu");
               menu.querySelector(".menuh .menu").classList.toggle("fa-times");
       } 

//Script de Galeria
       let num=1;
       function adelante(){
       let img=document.getElementById("img");
           num++
           if(num>8)
           (num=1);
           img.src="img/"+"spa0"+num+".jpg";     
       }
       function atras(){
       let img=document.getElementById("img");
           num--
           if(num<1)
           (num=8);
           img.src="img/"+"spa0"+num+".jpg";     
       }

    //Script del Header
    window.addEventListener("scroll", Scroll);
    function Scroll(){
        let header=document.getElementById("header");
        let posy=window.pageYOffset;
        if (posy>300){
            header.style.background="black";
            header.style.transition="0.5s";
        }
        else{
            header.style.background="none";
            header.style.transition="0.5s";
        }
    }