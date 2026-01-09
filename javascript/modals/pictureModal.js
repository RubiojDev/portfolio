export function pictureModal() {
    const modal = document.getElementById("image-modal");
    const modalImg = modal.querySelector("img");
    const modalClose = modal.querySelector(".modal-close");
    const modalOverlay = modal.querySelector(".modal-overlay");

    document.querySelectorAll(".projects-article-image").forEach((figure) => {
        figure.addEventListener("click", () => {
            const imgSrc = figure.dataset.modalImage;
            modalImg.src = imgSrc;
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    function closeModal() {
        modal.classList.remove("active");
        modalImg.src = "";
        document.body.style.overflow = "";
    }
}
