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

function myFunction() {
    document.body.style.backgroundColor = "white"; // Zmiana koloru tła body na białe
    var paragraphs = document.getElementsByTagName("p"); // Pobranie wszystkich elementów <p>
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "black"; // Zmiana koloru tekstu na czarny dla wszystkich elementów <p>
    }
    var headings = document.getElementsByTagName("h3"); // Pobranie wszystkich elementów <h3>
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.color = "black"; // Zmiana koloru tekstu na czarny dla wszystkich elementów <h3>
    }
    var aboutDiv = document.querySelector(".about"); // Pobranie diva o klasie "about"
    if (aboutDiv) {
        aboutDiv.style.backgroundColor = "white"; // Zmiana koloru tła diva o klasie "about" na białe
    }

    var aboutDiv = document.querySelector(".programming"); // Pobranie diva o klasie "about"
    if (aboutDiv) {
        aboutDiv.style.backgroundColor = "white"; // Zmiana koloru tła diva o klasie "about" na białe
    }
}

function myFunction2() {
    document.body.style.backgroundColor = "white"; // Zmiana koloru tła body na białe
    var paragraphs = document.getElementsByTagName("p"); // Pobranie wszystkich elementów <p>
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "black"; // Zmiana koloru tekstu na czarny dla wszystkich elementów <p>
    }
    var headings = document.getElementsByTagName("h3"); // Pobranie wszystkich elementów <h3>
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.color = "black"; // Zmiana koloru tekstu na czarny dla wszystkich elementów <h3>
    }
    var aboutDiv = document.querySelector(".git"); // Pobranie diva o klasie "about"
    if (aboutDiv) {
        aboutDiv.style.backgroundColor = "white"; // Zmiana koloru tła diva o klasie "about" na białe
    }
}