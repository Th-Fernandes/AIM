function toggleMenuBg() {
  let variable = 0

  setInterval(() => {
    const mainMenu = document.querySelector('.main-menu')

    if(variable == 0) {
      mainMenu.style.backgroundColor = 'rgb(17, 61, 128)'
      variable++
    }
    else {
      mainMenu.style.backgroundColor = 'black'
      variable--
    }

  }, 3000)
}



export { toggleMenuBg }