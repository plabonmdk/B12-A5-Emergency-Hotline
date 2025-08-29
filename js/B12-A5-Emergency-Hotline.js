
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


  document.addEventListener("DOMContentLoaded", function () {
    let coins = 100;
    const coinDisplay = document.getElementById("coin-count");
    const callButtons = document.querySelectorAll(".call-btn");
    const callHistory = document.getElementById("call-history");
    const clearButton = document.getElementById("clear-history");


    coinDisplay.textContent = coins;


    callButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const card = this.closest(".card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        if (coins < 20) {
          alert("Not enough coins to make a call.");
          return;
        }


        alert(`Calling ${serviceName} at ${serviceNumber}`);


        coins -= 20;
        coinDisplay.textContent = coins;


        const historyEntry = document.createElement("div");
        historyEntry.className="bg-gray-200 md-5"
        historyEntry.textContent = `${serviceName} - ${serviceNumber}`;
        callHistory.appendChild(historyEntry);
      });
    });


    clearButton.addEventListener("click", function () {
      callHistory.innerHTML = "";
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    let coppycount = 0;

    const coppyCounter = document.querySelector(".coppy-number");
    const coppyIcons = document.querySelectorAll(".fa-coppy");

    coppyIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            coppycount++;
            coppyCounter.textContent = coppycount;
            
        });

    });
});
