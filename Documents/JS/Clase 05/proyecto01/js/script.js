window.addEventListener("load", cambiarImagenes);
let imagenes=[];
imagenes[0]="img/banner1.png";
imagenes[1]="img/banner2.png";
imagenes[2]="img/banner3.png";
imagenes[3]="img/banner4.png";

let indiceImagenes=0;
let tiempo=1000;

function cambiarImagenes(){
    document.slider.src=imagenes[indiceImagenes];
    if (indiceImagenes<3){
        indiceImagenes++;
    }
    else{
        indiceImagenes=0;
    }
}
setInterval(cambiarImagenes,tiempo );