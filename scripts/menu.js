const menu = {
  toggleMenuBg() {
    let variable = 0
  
    setInterval(() => {
      const mainMenu = document.querySelector('.main-menu')
  
      if(variable == 0) {
        mainMenu.style.backgroundColor = 'rgb(17, 61, 128)'
        variable++
      }
      else {
        mainMenu.style.background = "#0f0f0f"
        variable--
      }
  
    }, 3000)
  },

  tutorialModal() {
    const tutorialButton = document.querySelector('#howToPlay')
    //const menu = document.querySelector('.menu-container')

    tutorialButton.addEventListener('click', () => {
      const mainContainer = document.querySelector('main')

      if(mainContainer.children[3] == undefined) {
      mainContainer.appendChild(tutorialModal)
      console.log(tutorialModal.parentElement.children[1])
      mainContainer.insertBefore(tutorialModal, tutorialModal.parentElement.children[1])
      }
      
      tutorialModal.style.display = 'flex'
      tutorialModal.style.visibility = 'visible'
    })

    const tutorialModal = document.createElement('section')
    tutorialModal.classList.add('menu-tutorial')
    tutorialModal.innerHTML +=  `
    <div class="menu-tutorial-container">
      <img class="close-modal" src="./images/close.svg">
      <img src="./images/target.png" alt="target">
    
      <div class="explication">
        <ul>
          <li>Clique o máximo que puder no alvo</li>
          <li>você tem 60 segundos para isso</li>
          <li>você pode clicar no alvo quantas vezes conseguir</li>
        </ul>
      </div>
    <div/>
    `

    
  
    tutorialModal.children[0].children[0].addEventListener('click', () => {
      tutorialModal.style.display = 'none'
      tutorialModal.style.visibility = 'hidden'
    })
  },
  //responsável por criar a animação da mira da logo
  aimAnimation() {
    const aimLogo = document.querySelector('#logo')
    let variable = 0.25
    const changeLogoPosition = () => {return aimLogo.style.marginRight = variable + 'rem'}
    // move a mira pra direita, alterando o margin (para ao atingir 25)
    const moveToRight = () =>  {
      const animationLogic = setInterval(() => {
        variable+= 0.25
        changeLogoPosition()
        
        if (variable == 25) {
          clearInterval(animationLogic)
          moveToLeft()
        }
      } , 15)
    }
  // move a mira pra esquerda, alterando o margin (para ao atingir -25)
    const moveToLeft = () => {
       const animationLogic = setInterval(() => {
        variable -= 0.25
        changeLogoPosition()

        if(variable == -25) {
          clearInterval(animationLogic)
          moveToRight()
        }
      }, 30)
    }

    moveToRight()
  
  }
}



export { menu }