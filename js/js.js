// STICKY NAVIGATION MENU JS
let nav = document.querySelector(".navbar");

let val;

window.onscroll = function(){
    var ttop = document.body.scrollTop;
    if(ttop>70){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}



let body = document.querySelector("body");

let navBar = document.querySelector(".menu");
let menuBtn = document.querySelector(".menuBtn");
let cancleBtn = document.querySelector(".cancel-btn");
document.querySelector(".menuBtn").addEventListener("click", showActive);
document.querySelector(".cancel-btn").addEventListener("click", hideActive);

function showActive(){
    navBar.classList.add("active");
    menuBtn.style.opacity = '0';
    
    body.style.overflowX = 'hidden';
}
function hideActive(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
    
    body.style.overflowX = 'auto';
}

let navLinks = document.querySelectorAll(".menu li a");

navLinks.forEach(func);
function func(item){
    item.addEventListener("click",hideActive);
}