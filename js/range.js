// Элементы
let rline = document.querySelector(".range-line");
let rpl = document.querySelector(".range-pointer-left");
let rpr = document.querySelector(".range-pointer-right");

// Параметры
let rlineParam = rline.getBoundingClientRect();
let rplParam = rpl.getBoundingClientRect();


let rpl_position = 0;
let rpr_position = rlineParam.width - rplParam.width; 

let mouse_down_l = false;
let mouse_down_r = false;
let pointer_down_l = false;
let pointer_down_r = false;

rpl.ondragstart = function() {
    return false;
  };


let rlineWidth = rlineParam.width;

rpr.style.left = rpr_position + "px"; //  Перетаскиваем правый шарик
let rprParam = rpr.getBoundingClientRect(); //  Обновляем его координаты

console.log(rlineParam.x);

//Цены  
elPriceMin = document.getElementById('price-input-min');
elPriceMax = document.getElementById('price-input-max');
console.log(elPriceMin.value, elPriceMax.value );
startPriceMin = 100000;
startPriceMax = 600000;

rplXstart = rplParam.x;
rprXstart = rprParam.x;

let  rplPrice;
let  rprPrice;

// Пересчет параметров при изм  экрана
window.addEventListener("resize", function() {
    rlineParam = rline.getBoundingClientRect();
    rpl_position = 0;
    rpl.style.left = rpl_position + "px"; //  Перетаскиваем левый шарик
    rplParam = rpl.getBoundingClientRect();  //  Обновляем его координаты
    rpr_position = rlineParam.width - rplParam.width; 
    rlineWidth = rlineParam.width;
    rpr.style.left = rpr_position + "px"; //  Перетаскиваем правый шарик
    rprParam = rpr.getBoundingClientRect(); //  Обновляем его координаты

    rplXstart = rplParam.x;
    rprXstart = rprParam.x;
    elPriceMin.value = startPriceMin
    elPriceMax.value = startPriceMax

});



//  Левый ползунок

rpl.addEventListener ("mousedown", function(){
    console.log('Ldown!');
    mouse_down_l = true; 
    
    
});

rpl.addEventListener ("mouseup", function(){
    console.log('Lup!');
    mouse_down_l = false;
    
});

//rpl.addEventListener ("mouseout", function(){
   // console.log('Lout!');
   // mouse_down_l = false;
    
//});



//  Правый ползунок

rpr.addEventListener ("mousedown", function(){
    console.log('rdown!');
    mouse_down_r = true; 
    
    
});

rpr.addEventListener ("mouseup", function(){
    console.log('rup!');
    mouse_down_r = false;
    
});

//rpr.addEventListener ("mouseout", function(){
    //console.log('rout!');
    //mouse_down_r = false;
//    
//});



// Движение

window.onmousemove = function(event){
    event = event || window.event;
    let rplParam = rpl.getBoundingClientRect();
    let rprParam = rpr.getBoundingClientRect();
    let move = event.clientX-rlineParam.x-12;
    let rplLeftStop = 0;
    let rplrightStop = rprParam.x -rlineParam.x - rprParam.width;
    
    
    let rprLeftStop = rplParam.x -rlineParam.x + rplParam.width;
    let rprrightStop = rlineParam.width - rplParam.width;
    //console.log("Правый шарик граница",  mouse_down_l);

    // Движение Левый
    
    if (mouse_down_l){
        

        //console.log("rplrightStop" , rplrightStop , "rpr position" , rprParam.x);
        if (move >  rplrightStop){
            rpl_position = rplrightStop;  
            } 
        else if (move < rplLeftStop){ 
            rpl_position = rplLeftStop;
            } 
        else{
            rpl_position = move;
            }
      rpl.style.left = rpl_position + "px";  
      rplPrice = startPriceMin*1 + (rpl_position )/(rprXstart - rplXstart-24)*(startPriceMax - startPriceMin); 
      elPriceMin.value = rplPrice;
      console.log(rplPrice); 
      //console.log(startPriceMax, "startPriceMax" , startPriceMin, "startPriceMin"); 
      //console.log(rprXstart, "rprXstart" , rplXstart, "rplXstart");
      //console.log(rpl_position, "rpl_position" );
    }   
    
    // Движение Правый
    if (mouse_down_r){
        if (move >  rprrightStop){
            rpr_position = rprrightStop;  
            } 
        else if (move < rprLeftStop){ 
            rpr_position = rprLeftStop;
            } 
        else{
            rpr_position = move;
            }
      rpr.style.left = rpr_position + "px";  
      rprPrice = startPriceMin*1 + (rpr_position - 24 )/(rprXstart - rplXstart-24)*(startPriceMax - startPriceMin); 
      elPriceMax.value = rprPrice
      //console.log(rpr_position, "rpr_position" , (rprXstart - rplXstart-24), "(rprXstart - rplXstart-24)" ); 
      console.log(rprPrice); 
    } 
    
} 


//===========================THUMB========================================================

//  Left Pointer

function onThumbDownLeft(event) {
  event.preventDefault(); // prevent selection start (browser action)
  shiftX = event.clientX - rpl.getBoundingClientRect().left;
  rpl.setPointerCapture(event.pointerId);
  rpl.onpointermove = onThumbMoveLeft;
  rpl.onpointerup = event => {
    // dragging finished, no need to track pointer any more
    // ...any other "drag end" logic here...
    rpl.onpointermove = null;
    rpl.onpointerup = null;
  }
};

function onThumbMoveLeft(event) {
  let rplParam = rpl.getBoundingClientRect();
  let rprParam = rpr.getBoundingClientRect();
  let rplLeftStop = 0;
  let rplrightStop = rprParam.x -rlineParam.x - rprParam.width;

  let move = event.clientX-rlineParam.x-shiftX;
  if (move >  rplrightStop){
    rpl_position = rplrightStop;  
    } 
  else if (move < rplLeftStop){ 
    rpl_position = rplLeftStop;
    } 
  else{
    rpl_position = move;
    }
  rpl.style.left = rpl_position + "px"; 
  rplPrice = startPriceMin*1 + (rpl_position )/(rprXstart - rplXstart-24)*(startPriceMax - startPriceMin); 
  elPriceMin.value = rplPrice;
};

rpl.onpointerdown = onThumbDownLeft;
rpl.ondragstart = () => false;


//  right Pointer

function onThumbDownright(event) {
    event.preventDefault(); // prevent selection start (browser action)
    shiftX = event.clientX - rpr.getBoundingClientRect().left;
    rpr.setPointerCapture(event.pointerId);
    rpr.onpointermove = onThumbMoveright;
    rpr.onpointerup = event => {
      // dragging finished, no need to track pointer any more
      // ...any other "drag end" logic here...
      rpr.onpointermove = null;
      rpr.onpointerup = null;
    }
};


function onThumbMoveright(event) {
    let rplParam = rpl.getBoundingClientRect();
    let rprParam = rpr.getBoundingClientRect();
    let rprLeftStop = rplParam.x -rlineParam.x + rplParam.width;
    let rprrightStop = rlineParam.width - rplParam.width;
    
  
    let move = event.clientX-rlineParam.x-shiftX;
    if (move >  rprrightStop){
        rpr_position = rprrightStop;  
        } 
    else if (move < rprLeftStop){ 
        rpr_position = rprLeftStop;
        } 
    else{
        rpr_position = move;
        }
    rpr.style.left = rpr_position + "px";
    rprPrice = startPriceMin*1 + (rpr_position - 24 )/(rprXstart - rplXstart-24)*(startPriceMax - startPriceMin); 
    elPriceMax.value = rprPrice  
};
  
rpr.onpointerdown = onThumbDownright;
rpr.ondragstart = () => false;


