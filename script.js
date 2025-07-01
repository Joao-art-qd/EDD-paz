
const target = new Date('2025-08-01T09:00:00').getTime();
const d = document.getElementById('dias');
const h = document.getElementById('horas');
const m = document.getElementById('minutos');
const s = document.getElementById('segundos');
function updateCountdown() {
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return;
  const dias = Math.floor(diff / 864e5);
  const horas = Math.floor(diff % 864e5 / 36e5);
  const min = Math.floor(diff % 36e5 / 6e4);
  const seg = Math.floor(diff % 6e4 / 1000);
  d.textContent = dias.toString().padStart(2, '0');
  h.textContent = horas.toString().padStart(2, '0');
  m.textContent = min.toString().padStart(2, '0');
  s.textContent = seg.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();
