document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.querySelector(".animated-text");

    // Function to add animation class when the element is in the viewport
    function handleScroll() {
        const elementPosition = animatedText.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight * 0.75) {
            animatedText.classList.add("animate");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on page load
    handleScroll();
});