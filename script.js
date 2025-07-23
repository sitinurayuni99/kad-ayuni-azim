// Countdown
const eventDate = new Date("2025-09-07T11:00:00").getTime();
const counter = document.getElementById("counter");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    counter.innerHTML = "Majlis telah berlangsung";
    return;
  }

  const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const saat = Math.floor((distance % (1000 * 60)) / 1000);

  counter.innerHTML = `${hari} hari ${jam} jam ${minit} minit ${saat} saat`;
};

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Popup
function openRSVP() {
  document.getElementById("popupRSVP").style.display = "block";
}
function closeRSVP() {
  document.getElementById("popupRSVP").style.display = "none";
}
