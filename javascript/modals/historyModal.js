export function historyModal() {
    const historyModal = document.getElementById("history-modal");
    const historyList = historyModal.querySelector(".history-timeline");

    document.querySelectorAll(".project-history-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const projectId = btn.dataset.project;
            
            try {
                const res = await fetch(`data/${projectId}.json`);
                const data = await res.json();
                renderHistory(data);
            } catch (err) {
                historyList.innerHTML = "<li>Error cargando historial.</li>";
            }

            historyModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    historyModal.querySelector(".modal-close").addEventListener("click", () => {
        historyModal.classList.remove("active");
        document.body.style.overflow = "";
    });

    historyModal
        .querySelector(".modal-overlay")
        .addEventListener("click", () => {
            historyModal.classList.remove("active");
            document.body.style.overflow = "";
        });

    function renderHistory(entries) {
        historyList.innerHTML = "";

        if (!entries || entries.length === 0) {
            historyList.innerHTML = "<li>No hay historial disponible.</li>";
            return;
        }

        entries.forEach((entry) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <div class="history-version">
                <strong>${entry.module}</strong>
            </div>
            <div class="history-version">
                <span class="status-${entry.status.toLowerCase()}">
                    ${entry.status}
                </span>
                <span>${entry.date}</span>
            </div>
            <ul class="history-changes">
                ${entry.changes.map((c) => `<li>- ${c}</li>`).join("")}
            </ul>
        `;
            historyList.appendChild(li);
        });
    }
}
