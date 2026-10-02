const karElement = document.querySelector('.kar');
const pervEcrElement = document.querySelector('.pervEcr');

function hideKar() {
  if (karElement) {
    karElement.style.display = 'none';
  }
}

if (pervEcrElement) {
  pervEcrElement.addEventListener('click', hideKar);
}