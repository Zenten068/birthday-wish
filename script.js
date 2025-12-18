let slideIndex = 1;
showSlides(slideIndex);
var a=1
document.getElementById("blank").style.visibility="hidden";

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function celebrate() {
    var duration = 3000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        }));
    }, 250);
    if (a==1){
    document.getElementById("buton").innerText = `Bol Delhi se kya leke aau tere liye!?`;
    document.getElementById("blank").style.visibility="visible";
a++}
    else if(a==2){
        document.getElementById("buton").innerText = `Jaldi milte hai and yeah Party chahiye mujhe!!!`;
    
    }
}