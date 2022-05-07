const sideNav = document.querySelector('#side-nav')
const body = document.querySelector('body')
const hamburgerIcon = document.querySelector('.hamburger-menu')

const openNav = () => {
  sideNav.style.width = '250px'
}

hamburgerIcon.addEventListener('click', e => {
  e.preventDefault()
  openNav()
})

body.addEventListener('click', e => {
  if ((sideNav.style.width === '250px') && (e.target.id !== 'side-nav' && e.target.className !== 'hamburger' )) {
    sideNav.style.width = '0'
  }
})


