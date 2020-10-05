const body = document.body;
let mode = body.querySelector('.mode');
let icons = body.querySelectorAll('ul li')

function modeToggle() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains('dark-mode')) {
    mode.classList.remove('light-mode')
    mode.classList.add('dark-mode')
  } else {
    mode.classList.remove('dark-mode')
    mode.classList.add('light-mode')
  }
}