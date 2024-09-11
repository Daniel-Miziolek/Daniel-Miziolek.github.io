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

function changeColor() {
    var currentMode = localStorage.getItem('colorMode');
    
    if (currentMode === 'default') {
        localStorage.setItem('colorMode', 'changed');
        localStorage.setItem('bodyColor', 'white');
        localStorage.setItem('textColor', 'black');
        localStorage.setItem('elementColor', 'white');
    } else {
        localStorage.setItem('colorMode', 'default');
        localStorage.setItem('bodyColor', '');
        localStorage.setItem('textColor', '');
        localStorage.setItem('elementColor', '');
    }
    
    applyColors();
}

function applyColors() {
    var bodyColor = localStorage.getItem('bodyColor');
    var textColor = localStorage.getItem('textColor');
    var elementColor = localStorage.getItem('elementColor');

    if (bodyColor && textColor && elementColor) {
        document.body.style.backgroundColor = bodyColor;

        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = textColor;
            paragraphs[i].style.backgroundColor = elementColor;
        }

        var headings = document.getElementsByTagName("h3");
        for (var i = 0; i < headings.length; i++) {
            headings[i].style.color = textColor;
        }

        var aboutDiv = document.querySelector(".about");
        if (aboutDiv) {
            aboutDiv.style.backgroundColor = elementColor;
        }

        var gitDiv = document.querySelector(".git");
        if (gitDiv) {
            gitDiv.style.backgroundColor = elementColor;
        }

        var programmingDiv = document.querySelector(".programming");
        if (programmingDiv) {
            programmingDiv.style.backgroundColor = elementColor;
        }
    } else {
        document.body.style.backgroundColor = '';
        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = '';
            paragraphs[i].style.backgroundColor = '';
        }

        var headings = document.getElementsByTagName("h3");
        for (var i = 0; i < headings.length; i++) {
            headings[i].style.color = '';
        }

        var aboutDiv = document.querySelector(".about");
        if (aboutDiv) {
            aboutDiv.style.backgroundColor = '';
        }

        var gitDiv = document.querySelector(".git");
        if (gitDiv) {
            gitDiv.style.backgroundColor = '';
        }

        var programmingDiv = document.querySelector(".programming");
        if (programmingDiv) {
            programmingDiv.style.backgroundColor = '';
        }
    }
}

window.onload = function() {
    if (!localStorage.getItem('colorMode')) {
        localStorage.setItem('colorMode', 'default');
    }
    applyColors();
};



