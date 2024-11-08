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
    let currentMode = localStorage.getItem('colorMode');

    if (currentMode === 'default') {
        localStorage.setItem('colorMode', 'changed');
        localStorage.setItem('bodyColor', 'white');
        localStorage.setItem('textColor', 'black');
        localStorage.setItem('elementColor', '#f0f0f0');
        document.body.classList.add('changed-mode');
    } else {
        localStorage.setItem('colorMode', 'default');
        localStorage.setItem('bodyColor', '');
        localStorage.setItem('textColor', '');
        localStorage.setItem('elementColor', '');
        document.body.classList.remove('changed-mode');
    }    
    
    applyColors();
}

function applyColors() {
    let bodyColor = localStorage.getItem('bodyColor');
    let textColor = localStorage.getItem('textColor');
    let elementColor = localStorage.getItem('elementColor');
    
    const isIndexPage = document.body.id === 'page1';

    if (bodyColor && textColor && elementColor) {
        if (!isIndexPage) {
            document.body.style.backgroundColor = bodyColor;
        }        

        let paragraphs = document.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = textColor;
            paragraphs[i].style.backgroundColor = elementColor;
        }

        let headings = document.getElementsByTagName("h3");
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.color = textColor;
        }

        let aboutDiv = document.querySelector(".about");
        if (aboutDiv) {
            aboutDiv.style.backgroundColor = elementColor;
        }

        let gitDiv = document.querySelector(".git");
        if (gitDiv) {
            gitDiv.style.backgroundColor = elementColor;
        }        

        let programmingDiv = document.querySelector(".programming");
        if (programmingDiv) {
            programmingDiv.style.backgroundColor = elementColor;
        }

        document.getElementById("fo").style.backgroundColor = elementColor;        
    } else {
        document.body.style.backgroundColor = '';
        document.getElementById('but').style.boxShadow = "";    
        let paragraphs = document.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = '';
            paragraphs[i].style.backgroundColor = '';
        }

        let headings = document.getElementsByTagName("h3");
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.color = '';
        }

        let aboutDiv = document.querySelector(".about");
        if (aboutDiv) {
            aboutDiv.style.backgroundColor = '';
        }

        let gitDiv = document.querySelector(".git");
        if (gitDiv) {
            gitDiv.style.backgroundColor = '';
        }

        let programmingDiv = document.querySelector(".programming");
        if (programmingDiv) {
            programmingDiv.style.backgroundColor = '';
        }
    }
}

window.onload = function() {
    if (!localStorage.getItem('colorMode')) {
        localStorage.setItem('colorMode', 'default');
    } else if (localStorage.getItem('colorMode') === 'changed') {
        document.body.classList.add('changed-mode');       
    }
    applyColors();
};
