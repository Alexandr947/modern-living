// Получаем видимую часть слайда
var it;

// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector(".slider");
// Получаем элементы показа слайда
//let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let pointer = document.querySelector(".pointer");
let viewSlide = 0;
let rowwidth =  document.querySelector(".top-offers-row-4").offsetWidth;
let sliderwidth =  document.querySelector(".slider").offsetWidth;
let linewidth =  document.querySelector(".line").offsetWidth;
it = Math.floor ((sliderwidth-rowwidth)/350);
let pointerwidth = linewidth/(it+1);
console.log(it);
console.log(pointerwidth);
pointer.style.width = pointerwidth + "px";


//addEvent(window, "resize", function() {console.log('resized');});

window.addEventListener("resize", function() {
    let rowwidth =  document.querySelector(".top-offers-row-4").offsetWidth;
    let sliderwidth =  document.querySelector(".slider").offsetWidth;
    let linewidth =  document.querySelector(".line").offsetWidth;
    it = Math.floor ((sliderwidth-rowwidth)/350);
    pointerwidth = linewidth/(it+1);

    pointer.style.width = pointerwidth + "px";
});



 
// Назначаем цвет индикатор слайда зелёный it = (sliderwidth -rowwidth)/350;
//viewSliders[0].style.backgroundColor = "green";
 
// Обработка клика на кнопку вперёд

btnNext.addEventListener("click", function () {
    


    if (viewSlide < it) { 
        viewSlide++;
    } else { 
        viewSlide = it;
    }

    slider.style.left = -viewSlide * 385 + "px";
    pointer.style.left = pointerwidth * viewSlide + "px";

    
    if (viewSlide === it) { 
        btnNext.style.backgroundColor = "#DADAEE"
    } 

    if (viewSlide > 0) { 
        btnPrev.style.backgroundColor = "#1C3988"
    } 
});
 

btnPrev.addEventListener("click", function () {

    if (viewSlide > 0) { 
        viewSlide--; 
    } else { 
        viewSlide = 0; 
    }

    if (viewSlide < it) { 
        btnNext.style.backgroundColor = "#1C3988"
    } 

    if (viewSlide === 0) { 
        btnPrev.style.backgroundColor = "#DADAEE"
    } 

    if (viewSlide > 0) { 
        btnPrev.style.backgroundColor = "#1C3988"
    } 



    slider.style.left = -viewSlide * 385 + "px";
    pointer.style.left = pointerwidth * viewSlide + "px";
});


