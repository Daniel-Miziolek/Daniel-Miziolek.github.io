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

    const savedMode = localStorage.getItem("theme");
    if (!savedMode) {
        localStorage.setItem("theme", "dark");
    }

    if (savedMode === "light") {
        setLightMode();
    } else {
        setDarkMode();
    }
});

const root = document.documentElement;

function toggleMode() {
    const currentBg = getComputedStyle(root).getPropertyValue('--element-color').trim();

    if (currentBg === '#1e1e1e') {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setLightMode() {
    root.style.setProperty('--element-color', 'var(--light-background-color)');
    root.style.setProperty('--field-color', 'var(--light-field-color)');
    root.style.setProperty('--accent-color', 'var(--light-accent-color)');
    root.style.setProperty('--darker-accent-color', 'var(--light-accent-color)');
    root.style.setProperty('--text-color', 'var(--light-text-color)');

    localStorage.setItem("theme", "light");
}

function setDarkMode() {
    root.style.setProperty('--element-color', '#1e1e1e');
    root.style.setProperty('--field-color', '#282727');
    root.style.setProperty('--accent-color', '#38ccae');
    root.style.setProperty('--darker-accent-color', '#289680');
    root.style.setProperty('--text-color', 'white');

    localStorage.setItem("theme", "dark");
}
