// script.js
(function () {
  const timeEl = document.getElementById("time");
  const amEl = document.getElementById("ampm");
  const dateEl = document.getElementById("date");
  const pad = (n) => String(n).padStart(2, "0");

  function update() {
    const d = new Date();
    let h = d.getHours();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12; // convert 0 -> 12
    timeEl.textContent = `${pad(h)} ${pad(d.getMinutes())} ${pad(d.getSeconds())}`;
    amEl.textContent = ampm;

    // Format date like: "Thursday, 5 March"
    // Using en-GB to ensure day before month and full weekday/month names
    const formattedDate = d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    dateEl.textContent = formattedDate;
  }

  update();
  setInterval(update, 1000);
})();
