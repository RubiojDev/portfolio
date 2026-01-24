export function copyEmail() {
    const emailName = "jesusantoniot";
    const emailServer = "gmail";
    const email = emailName + "@" + emailServer + ".com";
    const feedback = document.getElementById("copy-feedback");

    document
        .getElementById("copy-email")
        .addEventListener("click", async (e) => {
            e.preventDefault();

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(email);
                } else {
                    fallbackCopy(email);
                }
                showFeedback();
            } catch (err) {
                fallbackCopy(email);
                showFeedback();
            }
        });

    function fallbackCopy(text) {
        const input = document.createElement("input");
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    }

    function showFeedback() {
        feedback.classList.add("show");
        setTimeout(() => feedback.classList.remove("show"), 2000);
    }
}
