
const lines = [
  document.getElementById('line1'),
  document.getElementById('line2'),
  document.getElementById('line3'),
  document.getElementById('line4')
];

let delay = 1000;
lines.forEach((line, index) => {
  setTimeout(() => {
    line.classList.add('show');
  }, delay);
  delay += 2500;
});

setTimeout(() => {
  document.getElementById('buttons').classList.add('show');
}, delay + 2000);
