// Countdown
const targetDate = new Date("2025-09-07T00:00:00").getTime();
const counterEl = document.getElementById("counter");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    counterEl.innerHTML = "Majlis sedang berlangsung atau telah berlalu.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  counterEl.innerHTML = `${days} hari ${hours} jam ${minutes} minit ${seconds} saat`;
};

setInterval(updateCountdown, 1000);

// RSVP popup
function openRSVP() {
  document.getElementById("popupRSVP").style.display = "flex";
}

function closeRSVP() {
  document.getElementById("popupRSVP").style.display = "none";
}
