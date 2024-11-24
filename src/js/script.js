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
