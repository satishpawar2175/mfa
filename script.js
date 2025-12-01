document.addEventListener("DOMContentLoaded", () => {
    const p = document.querySelector("p");
    p.addEventListener("click", () => {
        alert("Hello! You clicked the text.");
    });
});
