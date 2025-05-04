const aboutBtn = document.getElementById('aboutBtn');
const aboutMenu = document.getElementById('aboutMenu');
const arrowIcon = document.getElementById('arrowIcon');

aboutBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isHidden = aboutMenu.classList.toggle('hidden');
  arrowIcon.textContent = isHidden ? '▼' : '▲';
});

document.addEventListener('click', (e) => {
  if (!aboutMenu.contains(e.target) && !aboutBtn.contains(e.target)) {
    aboutMenu.classList.add('hidden');
    arrowIcon.textContent = '▼';
  }
});
