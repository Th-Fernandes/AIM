import { target } from './scripts/target.js'
import { gameConfig } from './scripts/timer.js'
import { menu } from './scripts/menu.js'

//troca a cor de fundo do menu principal a cada certo tempo
menu.toggleMenuBg()
menu.tutorialModal()
menu.aimAnimation()
//configura o botão do menu principal, para poder jogar e recomeçar o jogo por ele
function startGame() {
  const playButton = document.querySelector('#start')
  playButton.addEventListener('click', () => {
    const menu = document.querySelector('.main-menu')
    menu.classList.toggle('hide')

    const timeOver = document.querySelector('.time-out')
    timeOver.classList.remove('active')
    
    gameConfig.time = 60

    target.printResults()
    gameConfig.timer()
})
}

startGame()
