const PASSWORD_BENAR = "0507";
const TANGGAL_LAHIR = "2010-07-05T00:00:00";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === PASSWORD_BENAR) {
    nextLayer("layer-password", "layer-countdown");
    mulaiAgeCounter();
  } else {
    alert("password salah, coba inget-inget lagi sayangkuu 🦈");
  }
}

function nextLayer(currentId, nextId) {
  document.getElementById(currentId).classList.add("hidden");
  document.getElementById(nextId).classList.remove("hidden");
}

function openFeature(featureId) {
  document.getElementById("layer-menu").classList.add("hidden");
  document.getElementById(featureId).classList.remove("hidden");
}

function backToMenu(featureId) {
  document.getElementById(featureId).classList.add("hidden");
  document.getElementById("layer-menu").classList.remove("hidden");
}

function mulaiAgeCounter() {
  setInterval(() => {
    const birthDate = new Date(TANGGAL_LAHIR);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const seconds = now.getSeconds();

    document.getElementById("days").innerText = years < 10 ? "0" + years : years;
    document.getElementById("hours").innerText = months < 10 ? "0" + months : months;
    document.getElementById("minutes").innerText = days < 10 ? "0" + days : days;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

function toggleLetter() {
  document.getElementById("letter-content").classList.toggle("hidden");
}

function openGift() {
  document.getElementById("gift-hint").classList.add("hidden");
  document.getElementById("gift-result").classList.remove("hidden");
}
