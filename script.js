document.addEventListener("DOMContentLoaded", () => {
   const entryImage = document.getElementById("entry-image");

   // Entfernt das Bild nach der Animation
   setTimeout(() => {
       entryImage.style.display = "none";
   }, 1500);
});