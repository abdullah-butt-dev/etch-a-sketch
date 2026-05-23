const container = document.querySelector('.js-container');
const resizeBtn = document.querySelector('.js-btn');
const clearBtn = document.querySelector('.js-clear');
const sizeDisplay = document.querySelector('.js-size');

let currentSize = 16;

// Create grid
function createBoxes(gridSize) {
  const totalSize = gridSize * gridSize;
  container.innerHTML = '';
  
  for (let i = 1; i <= totalSize; i++) {
    const box = document.createElement('div');
    box.classList.add('square-box');
    
    // Random color on hover
    box.addEventListener('mouseenter', () => {
      if (!box.style.backgroundColor) {
        box.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
      }
    });
    
    // Calculate size
    box.style.width = `calc(100% / ${gridSize})`;
    box.style.height = `calc(100% / ${gridSize})`;
    
    container.appendChild(box);
  }
}

// Clear all colors
function clearCanvas() {
  const boxes = document.querySelectorAll('.square-box');
  boxes.forEach(box => {
    box.style.backgroundColor = '';
  });
}

// Remove all boxes
function removeBoxes() {
  const boxes = document.querySelectorAll('.square-box');
  boxes.forEach(box => box.remove());
}

// Random number for RGB (1-255)
function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

// Resize grid
function resizeGrid() {
  let newSize;
  do {
    newSize = prompt('Enter grid size (max 100):', currentSize);
    if (newSize === null) return; // Cancel
    newSize = parseInt(newSize);
  } while (isNaN(newSize) || newSize > 100 || newSize < 1);
  
  currentSize = newSize;
  sizeDisplay.textContent = `${currentSize} x ${currentSize}`;
  createBoxes(currentSize);
}

// Initialize
createBoxes(currentSize);

// Event listeners
resizeBtn.addEventListener('click', resizeGrid);
clearBtn.addEventListener('click', clearCanvas);
