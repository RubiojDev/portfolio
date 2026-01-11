import { translations } from "./i18n.js";

export function setLanguage(lang) {
    const meta = document.querySelectorAll("[data-i18n-meta]");

    const textNormal = document.querySelectorAll("[data-i18n]");

    const textWithHTML = document.querySelectorAll("[data-i18n-html]");

    const ariaLabel = document.querySelectorAll("[data-i18n-aria]");

    const title = document.querySelectorAll("[data-i18n-title]");

    const placeholder = document.querySelectorAll("[data-i18n-holder]");

    translateMeta(meta, lang);

    translateText(textNormal, lang);

    translateTextWithHtml(textWithHTML, lang);

    translateAriaLabel(ariaLabel, lang);

    translateAttributeTitle(title, lang);

    translateAttributePlaceholder(placeholder, lang);

    updateCvLink(lang);

    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);

    document
        .querySelector(".icon-language-es")
        .classList.toggle("hidden", lang !== "es");

    document
        .querySelector(".icon-language-en")
        .classList.toggle("hidden", lang !== "en");
}

export function translate(key) {
    const lang = localStorage.getItem("language") || "es";
    return translations[lang]?.[key] || key;
}

function translateText(element, lang) {
    element.forEach((el) => {
        const key = el.dataset.i18n;
        if (translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function translateTextWithHtml(element, lang) {
    element.forEach((el) => {
        const key = el.dataset.i18nHtml;
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

function translateAriaLabel(element, lang) {
    element.forEach((el) => {
        const key = el.dataset.i18nAria;
        if (translations[lang]?.[key]) {
            el.setAttribute("aria-label", translations[lang][key]);
        }
    });
}

function translateAttributeTitle(element, lang) {
    element.forEach((el) => {
        const key = el.dataset.i18nTitle;
        if (translations[lang]?.[key]) {
            el.setAttribute("title", translations[lang][key]);
        }
    });
}

function translateAttributePlaceholder(element, lang) {
    element.forEach((el) => {
        const key = el.dataset.i18nHolder;
        if (translations[lang]?.[key]) {
            el.setAttribute("placeholder", translations[lang][key]);
        }
    });
}

function translateMeta(element, lang) {
    element.forEach((el) => {
        const key = el.dataset.i18nMeta;
        if (translations[lang]?.[key]) {
            el.setAttribute("content", translations[lang][key]);
        }
    });
}

function updateCvLink(lang) {
    const cvLink = document.querySelector("[data-cv-link]");
    if (!cvLink) return;

    const cvMap = {
        es: "./assets/docs/CV_Jesus_Rubio_Backend_ES.pdf",
        en: "./assets/docs/CV_Jesus_Rubio_Backend_EN.pdf",
    };

    cvLink.setAttribute("href", cvMap[lang] || cvMap.es);
}
