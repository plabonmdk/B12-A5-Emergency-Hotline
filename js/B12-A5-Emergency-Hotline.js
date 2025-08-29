document.addEventListener("DOMContentLoaded", function () {

  let heartCount = 0;
  let coins = 100;
  let copyCount = 1;

  const heartCounter = document.querySelector(".heart-count");
  const coinDisplay = document.getElementById("coin-count");
  const callHistory = document.getElementById("call-history");
  const clearButton = document.getElementById("clear-history");
  const copyDisplay = document.querySelector(".coppy-number"); 

  coinDisplay.textContent = coins;


  document.addEventListener("click", function (e) {
    const target = e.target;


    if (target.classList.contains("fa-heart")) {
      heartCount++;
      heartCounter.textContent = heartCount;
    }


    if (target.classList.contains("call-btn")) {
      const card = target.closest(".card");
      const serviceName = card.querySelector(".service-name").textContent;
      const serviceNumber = card.querySelector(".service-number").textContent;

      if (coins < 20) {
        alert("Not enough coins to make a call.");
        return;
      }

      alert(`Calling ${serviceName} at ${serviceNumber}`);
      coins -= 20;
      coinDisplay.textContent = coins;

      const time = new Date().toLocaleTimeString("en-BD", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Dhaka",
      });

      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
          <div>
            <p class="font-bold text-xl">${serviceName}</p>
            <p class="text-gray-600 font-semibold text-xl">${serviceNumber}</p>
          </div>
          <span class="text-lg text-gray-500 font-semibold">${time}</span>
        </div>
      `;
      callHistory.appendChild(div);
    }

    if (target.id === "clear-history") {
      callHistory.innerHTML = "";
    }

 
    if (target.classList.contains("fa-coppy")) {
      copyDisplay.innerText = copyCount++;

      const card = target.closest(".card");
      const numberElement = card.querySelector(".service-number");

      const numberText = numberElement.innerText;
      navigator.clipboard.writeText(numberText);
      alert(`The number has been copied : ${numberText}`);
    }
  });
});
