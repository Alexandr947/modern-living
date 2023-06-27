
let containerWidth; 
let tk = document.querySelector('.transform-container');
let rightcol = document.querySelector('.single-prop-rightcol');
let revInsert = document.querySelector('.single-prop-row-2');

function transfotmFlat() {
    
    console.log(containerWidth);
    if (containerWidth < 1200){
        tk.append(rightcol); 
        console.log("trnsf-In");
    } 
    else{
        revInsert.append(rightcol); 
        console.log("trnsf-Out");
    }
}


window.addEventListener("resize", function(){
    containerWidth =  window.innerWidth;
    transfotmFlat(); 
});



window.addEventListener("load", function(){
    containerWidth =  window.innerWidth;
    transfotmFlat(); 
} );