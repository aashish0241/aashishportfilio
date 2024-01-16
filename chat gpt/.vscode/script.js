const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const text = document.getElementById('text');
const container = document.getElementById('container');
let alpha = 0;
let alphaDirection = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle(
    canvas.width / 2,
    canvas.height / 2,
    alpha * 10,
    'rgba(255, 255, 255, ' + alpha + ')'
  );

  if (alphaDirection === 1) {
    alpha += 0.01;
    if (alpha > 0.5) {
      alphaDirection = -1;
    }
  } else {
    alpha -= 0.01;
    if (alpha < 0.01) {
      alphaDirection = 1;
    }
  }
}

animate();

setTimeout(() => {
  text.style.opacity = 1;
}, 2000);
