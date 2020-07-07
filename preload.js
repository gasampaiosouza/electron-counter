// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('counter--button');
  const counter = document.getElementById('counter--counter');

  button.onclick = () => {
    const currentValue = Number(counter.textContent);

    return (counter.textContent = currentValue + 1);
  };
});
