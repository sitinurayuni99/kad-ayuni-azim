
function openRSVP() {
  document.getElementById("popupRSVP").style.display = "block";
}

function closeRSVP() {
  document.getElementById("popupRSVP").style.display = "none";
}

function updateCountdown() {
  const eventDate = new Date("2025-09-07T00:00:00");
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("counter").innerHTML = "Selamat Pengantin Baru!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerHTML = 
    days + " hari " + hours + " jam " + minutes + " minit " + seconds + " saat";
}

setInterval(updateCountdown, 1000);
updateCountdown();
