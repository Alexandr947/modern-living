//============reference-slider===========================

let refWindowWidth=  document.querySelector(".references-row-second").offsetWidth; // Длинна  окна слайда
let refWindow=  document.querySelector(".references-row-second");
let referenceSlider = document.querySelector(".references-slider") //  Берем слайдер со слайдами
let slidesPerWindow = Math.floor(refWindowWidth/350);// Вычисляем сколько слайдов помещаются в окне
let slides = document.querySelectorAll('.reference');//  Берем все слайды
let slidesCount = slides.length;//  Считаем все слайды
let dotsCount = slides.length - slidesPerWindow;//   расчитываем кол -во  точек (= слайдов за кадром)
let prevDot = 0;// переменная  - индекс предыдущей точки,  которую мы красим  в обычный цвет  , когда переходим на новую


// Создаем точки
for(r=0; r <= dotsCount; r++){
  let parent = document.querySelector('.dot-container');
  let div = document.createElement('div');  
  div.className = "dot";
  parent.append(div);
}

// Создаем переменные для точек
var dots = document.querySelectorAll('.dot');
let dot = document.querySelector(".dot")
let dotsContainer = document.querySelector(".dot-container"); 
let clickIndex;



//Функция движения
function referenceMove(m){
  referenceSlider.style.left = -385*m +"px";
  dots[prevDot].style.backgroundColor = "#DADAEE"
  prevDot = m;
  dots[m].style.backgroundColor = "#1C3988"

}

// Функция поставить таймер
function setTimer() {
  let index = 0;
  timer = setInterval(function(){
    referenceMove(index);
    index++;
    
    if (index > dotsCount ) {
        index = 0;
    }
   },3000);
  }



// Функция убрать таймер
  function clearTimer1() {
    clearInterval(timer);
    //setTimeout(setTimer, 10000);

  }

//клики по точкам
for (let i = 0; i <= dotsCount; i++){
    (function(index){
        dots[i].addEventListener("click", myScript);
      function myScript(){
        console.log(index);
        referenceMove(index);
        clearInterval(timer);
        setTimeout(setTimer, 10000); // Отменяем автомат.  переключение
      }
    })(i);
}




setTimer();

 
refWindow.addEventListener("mouseover", function() {
  clearTimer1();
} );

refWindow.addEventListener("mouseout", function() {
  setTimer();
} );










//dotsContainer.addEventListener("click", function(event) { 
//    clickIndex = dots.indexOf(event.target);
//    console.log(clickIndex);
//}); //навешиваем один обработчик на родительский элемент; в свойстве `target` будет содержаться непосредственно тот элемент, по которому кликнули








