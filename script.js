const totalFrames = 35; // broj slika
let currentFrame = 1; // počinjemo od slike 1
const image = document.getElementById('productImage');

let isDragging = false;
let startX = 0;

function updateImage(delta) {
  currentFrame += delta;
  if (currentFrame > totalFrames) currentFrame = 1;
  if (currentFrame < 1) currentFrame = totalFrames;

  image.src = `images/${currentFrame}.png`;
}

document.getElementById('viewer').addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const delta = e.clientX - startX;
    if (Math.abs(delta) > 5) {
      updateImage(delta > 0 ? 1 : -1);
      startX = e.clientX;
    }
  }
});
