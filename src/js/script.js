document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.querySelector(".animated-text");

    
    function handleScroll() {
        const elementPosition = animatedText.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight * 0.75) {
            animatedText.classList.add("animate");
        }
    }

    window.addEventListener("scroll", handleScroll);    
    handleScroll();
});

/*function myFunction() {
    document.body.style.backgroundColor = "white"; 
    var paragraphs = document.getElementsByTagName("p"); 
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "black"; 
        paragraphs[i].style.backgroundColor = "white";
    }
    var headings = document.getElementsByTagName("h3"); 
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.color = "black"; 
    }
    var aboutDiv = document.querySelector(".about"); 
    if (aboutDiv) {
        aboutDiv.style.backgroundColor = "white"; 
    }

    var aboutDiv = document.querySelector(".git"); 
    if (aboutDiv) {
        aboutDiv.style.backgroundColor = "white"; 
    }


    var aboutDiv = document.querySelector(".programming");
    if (aboutDiv) {
        aboutDiv.style.backgroundColor = "white"; 
    }
}

function myFunction2() {
    location.reload();
}*/

