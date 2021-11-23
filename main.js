import { target } from './scripts/target.js'
import { gameConfig } from './scripts/timer.js'
import { menu } from './scripts/menu.js'
import { difficultSettings } from './scripts/gameDifficult.js'

//troca a cor de fundo do menu principal a cada certo tempo
function menuAnimations() {
  menu.toggleMenuBg()
  menu.tutorialModal()
  menu.aimAnimation()
}
menuAnimations()
//configura o botão do menu principal, para poder jogar e recomeçar o jogo por ele
function startGame() {
  const playButton = document.querySelector('#start')
  playButton.addEventListener('click', () => {
    const menu = document.querySelector('.main-menu')
    menu.classList.toggle('hide')

    const timeOver = document.querySelector('.time-out')
    timeOver.classList.remove('active')
    
    gameConfig.time = 6

    target.printResults()
    gameConfig.timer()
  })
}
startGame()
// habilita a funcionalidade de esolher a dificuldade no menu principal
difficultSettings.difficultChoice()

