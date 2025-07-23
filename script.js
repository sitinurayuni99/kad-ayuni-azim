// script.js

// Countdown hanya kalau tak diletak inline dalam index.html
function countdown() {
  const eventDate = new Date("2025-09-07T00:00:00").getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    document.getElementById("counter").innerText = "Majlis telah berlangsung.";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerText = `${days} hari ${hours} jam ${minutes} minit ${seconds} saat`;
}

setInterval(countdown, 1000);
