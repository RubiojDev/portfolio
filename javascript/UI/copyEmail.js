export function copyEmail() {
    const emailName = "tucorreo";
    const emailServer = "gmail";
    const email = emailName + "@" + emailServer + ".com";
    const feedback = document.getElementById("copy-feedback");

    document.getElementById("copy-email").addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
            feedback.classList.add("show");
            setTimeout(() => feedback.classList.remove("show"), 2000);
        });
    });
}
