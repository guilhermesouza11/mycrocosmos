window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function(){
    var img = this.document.querySelector("img");
    img.classList.toggle("decrease", window.scrollY > 0);
});

var buy = document.querySelector("#buy");
var actions = document.querySelector(".actionsCard");

buy.addEventListener("click", function(){
    if(actionsCard.style.display === 'none'){
        actionsCard.style.display === 'flex';
    }else{
        actionsCard.style.display === 'none';
    }
});