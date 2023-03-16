
let jogador = document.getElementById("jogador");
let valorX = document.getElementById("valorX");
let valorY = document.getElementById("valorY");

let xInicial= 0;
let yInicial= 0;
let tmpX;
let tmpY;


function movimentarX(x){
      let posX = x + "px";
      jogador.style.left = posX;
      if(posX == (valorX.value + "px")){
        clearInterval(tmpX);
      }

      console.log(posX);
      
}
function movimentarY(y){
      let posY = y + "px";
      jogador.style.top = posY;
      if(posY == (valorY.value + "px")){
        clearInterval(tmpY);
      }
}

function iniciar(){
    tmpX = setInterval(function(){movimentarX(xInicial++)}, 50);
    tmpY = setInterval(function(){movimentarY(yInicial++)}, 50);

}

document.getElementById("iniciar").addEventListener("click",iniciar);


