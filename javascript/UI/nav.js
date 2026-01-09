export function barNav() {
    const burger = document.querySelector(".nav-burger");
    const navLink = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    const language = document.querySelector(".nav-language");
    const iconLanguageES = document.querySelector(".icon-language-es");
    const iconLanguageEN = document.querySelector(".icon-language-en");

    burger.addEventListener("click", () => {
        toggleBurgerNav();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            removeBurgerNav();
        });
    });

    language.addEventListener("click", () => {
        toggleLanguageNav();
    });

    function toggleBurgerNav() {
        navLink.classList.toggle("active");
        burger.classList.toggle("open");
    }

    function removeBurgerNav() {
        navLink.classList.remove("active");
        burger.classList.remove("open");
    }

    function toggleLanguageNav() {
        iconLanguageES.classList.toggle("hidden");
        iconLanguageEN.classList.toggle("hidden");
    }
}
