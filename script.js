(function () {
  const timeEl = document.getElementById("time");
  const amEl = document.getElementById("ampm");
  const dateEl = document.getElementById("date");
  const updateImageBtn = document.getElementById("updateImageBtn");
  const body = document.body;

  const pad = (n) => String(n).padStart(2, "0");

  function setBackground(url) {
    if (!url) return;
    body.style.backgroundImage = `url("${url}")`;
    localStorage.setItem("clockBackgroundImage", url);
  }

  function loadSavedBackground() {
    const savedUrl = localStorage.getItem("clockBackgroundImage");
    if (savedUrl) setBackground(savedUrl);
  }

  function update() {
    const d = new Date();
    let h = d.getHours();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    timeEl.textContent = `${pad(h)}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    amEl.textContent = ampm;

    const formattedDate = d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    dateEl.textContent = formattedDate;
  }

  updateImageBtn.addEventListener("click", () => {
    const url = prompt("Enter image URL for background:");
    if (url && url.trim()) {
      setBackground(url.trim());
    }
  });

  loadSavedBackground();
  update();
  setInterval(update, 1000);
})();