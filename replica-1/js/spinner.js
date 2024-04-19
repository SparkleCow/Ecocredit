let count = 0;
const target = 3234;
const increment = 15; // Ajusta la cantidad que deseas incrementar en cada iteración
const speed = 10; // Ajusta la velocidad de incremento (ms)

const counterElement = document.querySelector('.counter');
const spinnerContainer = document.getElementById('spinner-container');

function updateCounter() {
  if (count < target) {
    count += increment;
    if (count > target) count = target;
    counterElement.innerText = count;
    setTimeout(updateCounter, speed);
  }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  

let isCounterStarted = false;

window.addEventListener('scroll', function() {
  if (isElementInViewport(spinnerContainer) && !isCounterStarted) {
    isCounterStarted = true;
    updateCounter();
  }
});
