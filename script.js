function toggleMenu() {
  document.querySelector('.menu-overlay').classList.toggle('open');
}

function closeMenu() {
  document.querySelector('.menu-overlay').classList.remove('open');
}

document.addEventListener('click', function (event) {
  const menu = document.querySelector('.menu-overlay');
  const burger = document.querySelector('.fixed-burger');

  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove('open');
  }
});
