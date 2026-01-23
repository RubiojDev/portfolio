import { translate } from "../language/changeLanguage.js";

export function contactForm() {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("form-status");

    emailjs.init("tnBmvzHPYDV4Onvh5");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        statusMsg.textContent = "";
        statusMsg.className = "";

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name.length < 2) {
            showError(translate("nameError"));
            return;
        }

        if (!isValidEmail(email)) {
            showError(translate("emailError"));
            return;
        }

        if (message.length < 10) {
            showError(translate("messageError"));
            return;
        }

        statusMsg.textContent = translate("sending");

        emailjs
            .send("service_f4y779d", "template_bpalade", {
                name,
                email,
                message,
            })
            .then(() => {
                statusMsg.textContent = translate("formSuccess");
                statusMsg.classList.add("form-success");
                form.reset();
            })
            .catch(() => {
                showError(translate("formError"));
            });
    });
    
    function showError(msg) {
        statusMsg.textContent = msg;
        statusMsg.classList.add("form-error");
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
