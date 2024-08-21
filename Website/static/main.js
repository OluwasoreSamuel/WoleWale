const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelector('nav ul');
const closeIcon = document.querySelector('.close');

//show menu on mobile view on click of the menubar hamburger
menuBtn.addEventListener('click', () => {
  menuItems.style.display = 'flex';
  closeIcon.style.display = 'inline-block'
})


closeBtn.addEventListener('click', () => {
  menuItems.style.display = 'none';
  closeIcon.style.display = 'none'
  closeBtn.style.display = 'none'
})