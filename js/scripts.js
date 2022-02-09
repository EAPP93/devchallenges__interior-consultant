const btn = document.querySelector('#btn-hamburger');
const line = document.querySelectorAll('.menu__line');
const menu = document.querySelector('#menu');

const body = document.body.clientWidth

btn.addEventListener('click', () => {
  if (body <= "1200") {
    btn.classList.toggle('clicked');
    line.forEach(el => {
      el.classList.toggle('active');
    })
    menu.classList.toggle('show');
  }
})

