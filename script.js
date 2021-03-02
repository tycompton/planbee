// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')
const navlist = document.querySelector('.nav-list')

menu.addEventListener('click', () => {
  navbar.classList.toggle('change')
  menu.classList.toggle('change')
})

navlist.addEventListener('click', () => {
    navbar.classList.toggle('change')
  }
)
