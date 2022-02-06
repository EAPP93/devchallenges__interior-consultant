const btn = document.querySelector('#btn-hamburger');
const line = document.querySelectorAll('.hamburger-menu__line');
const menu = document.querySelector('#menu');

btn.addEventListener('click', () => {

  btn.classList.toggle('clicked');
  line.forEach(el => {
    el.classList.toggle('active');
  })

  menu.classList.toggle('show');
})

