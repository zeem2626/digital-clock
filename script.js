// script.js
(function(){
  const timeEl = document.getElementById('time');
  const amEl = document.getElementById('ampm');
  const pad = n => String(n).padStart(2,'0');

  function update(){
    const d = new Date();
    let h = d.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12; // convert 0 -> 12
    timeEl.textContent = `${pad(h)} : ${pad(d.getMinutes())} : ${pad(d.getSeconds())}`;
    amEl.textContent = ampm;
  }

  update();
  setInterval(update, 1000);
})();
