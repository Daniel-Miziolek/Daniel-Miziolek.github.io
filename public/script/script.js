document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.querySelector(".animated-text");

    function handleScroll() {
        if (animatedText) {
            const elementPosition = animatedText.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPosition < screenHeight * 0.75) {
                animatedText.classList.add("animate");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const savedMode = localStorage.getItem("theme") ?? "dark";
    localStorage.setItem("theme", savedMode);

    savedMode === "light" ? setLightMode() : setDarkMode();
});

const root = document.documentElement;

window.toggleMode = function () {
    const bg = getComputedStyle(root).getPropertyValue("--element-color").trim();
    bg === "#1e1e1e" ? setLightMode() : setDarkMode();
};

function setLightMode() {
    root.style.setProperty("--element-color", "var(--light-background-color)");
    root.style.setProperty("--field-color", "var(--light-field-color)");
    root.style.setProperty("--accent-color", "var(--light-accent-color)");
    root.style.setProperty("--darker-accent-color", "var(--light-accent-color)");
    root.style.setProperty("--text-color", "var(--light-text-color)");
    localStorage.setItem("theme", "light");
}

function setDarkMode() {
    root.style.setProperty("--element-color", "#1e1e1e");
    root.style.setProperty("--field-color", "#282727");
    root.style.setProperty("--accent-color", "#38ccae");
    root.style.setProperty("--darker-accent-color", "#289680");
    root.style.setProperty("--text-color", "white");
    localStorage.setItem("theme", "dark");
}
