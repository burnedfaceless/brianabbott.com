const openNav = () => {
  document.querySelector('#side-nav').style.width = '250px'
}

document.querySelector('body').addEventListener('click', ev => {
  const sideNav = document.querySelector('#side-nav')
  if ((sideNav.style.width === '250px') && (ev.target.id !== 'side-nav' && ev.target.className !== 'hamburger-menu' )) {
    sideNav.style.width = '0'
  }
})