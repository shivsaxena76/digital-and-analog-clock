function updateClock() {
  const now = new Date();
  let h = now.getHours().toString().padStart(2, '0');
  let m = now.getMinutes().toString().padStart(2, '0');
  let s = now.getSeconds().toString().padStart(2, '0');
  document.getElementById("clock").textContent = `${h}:${m}:${s}`;

  const secondDeg = now.getSeconds() * 6;
  const minuteDeg = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const hourDeg = ((now.getHours() % 12) / 12) * 360 + now.getMinutes() * 0.5;

  document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg) translate(-50%)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg) translate(-50%)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg) translate(-50%)`;
}

setInterval(updateClock, 1000);
updateClock();