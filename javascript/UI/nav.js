import { setLanguage } from "../language/changeLanguage.js";

export function barNav() {
    const burger = document.querySelector(".nav-burger");
    const navLink = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    const language = document.querySelector(".nav-language");

    burger.addEventListener("click", () => {
        toggleBurgerNav();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            removeBurgerNav();
        });
    });

    language.addEventListener("click", () => {
        const currentLang = localStorage.getItem("language") || "es";
        const newLang = currentLang === "es" ? "en" : "es";
        setLanguage(newLang);
    });

    function toggleBurgerNav() {
        navLink.classList.toggle("active");
        burger.classList.toggle("open");
    }

    function removeBurgerNav() {
        navLink.classList.remove("active");
        burger.classList.remove("open");
    }
}
