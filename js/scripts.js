const sideNav = document.querySelector('#side-nav')
const body = document.querySelector('body')

const openNav = () => {
  sideNav.style.width = '250px'
}

body.addEventListener('click', ev => {
  if ((sideNav.style.width === '250px') && (ev.target.id !== 'side-nav' && ev.target.className !== 'hamburger-menu' )) {
    sideNav.style.width = '0'
  }
})