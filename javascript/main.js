import { barNav } from "./UI/nav.js"
import { copyEmail } from "./UI/copyEmail.js"
import { contactForm } from "./forms/contactForm.js"
import { pictureModal } from "./modals/pictureModal.js"
import { historyModal } from "./modals/historyModal.js"
import { setLanguage } from "./language/changeLanguage.js";

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "es";
    setLanguage(savedLang);
});

barNav();
copyEmail()
contactForm();
pictureModal();
historyModal();