const slides = document.querySelector(".slider-items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const totalSlider = slides.length;
 let index = 0;

 prev.onclick= function() {
    slider("prev")
 }
 next.onclick= function() {
    slider("next")
 }

 function slider(direction) {

    if(direction=="next"){
        if(index==totalSlider-1){
        index=0;
        }
        else {
        index++;
        }
    }

    if(direction=="prev"){
        if(index==0){
            index=totalSlider-1;
        }
        else {
            index--;
        }
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");        
    }
    slides[index].classList.add("active");
}