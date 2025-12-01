document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    card.addEventListener("click", () => {
        card.classList.add("glow");

        // Remove glow effect after animation ends
        setTimeout(() => {
            card.classList.remove("glow");
        }, 600);
    });
});
