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
            showError("El nombre debe tener al menos 2 caracteres");
            return;
        }

        if (!isValidEmail(email)) {
            showError("El correo no es válido");
            return;
        }

        if (message.length < 10) {
            showError("El mensaje debe tener al menos 10 caracteres");
            return;
        }

        statusMsg.textContent = "Enviando...";

        emailjs
            .send("service_f4y779d", "template_bpalade", {
                name,
                email,
                message,
            })
            .then(() => {
                statusMsg.textContent = "Mensaje enviado correctamente ✔";
                statusMsg.classList.add("form-success");
                form.reset();
            })
            .catch(() => {
                showError("Error al enviar el mensaje. Intenta más tarde.");
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
