const bgImageE1 = document.getElementById("bg-img") ;

window.addEventListener("scroll",()=>{
    updateImage();
});

function updateImage(){
    bgImageE1.style.opacity = 1- window.pageYOffset /500
    console.log(window.pageYOffset ,  1- window.pageYOffset /500);
    bgImageE1.style.backgroundSize = 100 - window.pageYOffset / 12 + "%";

}