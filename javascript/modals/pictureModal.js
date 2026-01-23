export function pictureModal() {
    const modal = document.getElementById("image-modal");
    const modalImg = modal.querySelector("img");
    const closeBtn = modal.querySelector(".modal-close");
    const prevBtn = modal.querySelector(".prev");
    const nextBtn = modal.querySelector(".next");

    let images = [];
    let currentIndex = 0;

    document.querySelectorAll(".projects-article-image").forEach((figure) => {
        figure.addEventListener("click", () => {
            images = figure.dataset.images.split(",").map((src) => src.trim());
            currentIndex = 0;
            modalImg.src = images[currentIndex];
            modal.classList.add("active");
        });
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}
