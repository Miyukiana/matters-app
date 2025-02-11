document.addEventListener("DOMContentLoaded", () => {
    const greenBox = document.getElementById("green");

    greenBox.addEventListener("mouseenter", () => {
        greenBox.style.backgroundColor = "lightgreen";
    });

    greenBox.addEventListener("mouseleave", () => {
        greenBox.style.backgroundColor = "transparent";
    });
});
