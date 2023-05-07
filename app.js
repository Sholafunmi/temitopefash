const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuItems = document.querySelector('.menu-items');

hamburgerIcon.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});
