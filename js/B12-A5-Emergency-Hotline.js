
   document.addEventListener("DOMContentLoaded", function () {
    let heartCount = 0;

    const heartCounter = document.querySelector(".heart-count");
    const heartIcons = document.querySelectorAll(".fa-heart");

    heartIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            heartCount++;
            heartCounter.textContent = heartCount;
        });
    });
});
