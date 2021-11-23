import { gameConfig } from "./timer.js"
import { difficultSettings } from './gameDifficult.js'

const target = {
  create() {
    //cria o circulo na tela
    const createTarget = document.createElement('div')
    createTarget.classList.add('target')
    let score = 0
    // ao clicar, contabiliza pontos
    createTarget.addEventListener('click', () => {
      score++
      //imprime a pontuação no footer da tela
      const printScoreOnFooter = document.querySelector('#score')
      printScoreOnFooter.textContent = `${score} shoots!!`
      printScoreOnFooter.classList.add('active')
      setTimeout(() => printScoreOnFooter.classList.remove('active'), 500)
      // imprime a pontuação ao fundo da tela (main)
      const printScoreAsBg = document.querySelector('#scoreBg')
      printScoreAsBg.textContent = `${score}`
  })
    
    return createTarget
  },
  // gera dois números aleatórios, que posteriormente serão usados para gerar posições aleatórias para o alvo 
  position() {
    const randomNumber = () => Math.round(Math.random() * 60)
    const positions = {top: randomNumber(), left: randomNumber()}
    
    return positions
  },
  //gera na tela o alvo, com posições aleatórias, usando as funções acima
  printResults() {
    const target = this.create()

    const screen = document.querySelector('main')
    screen.appendChild(target)

    const positions = () =>  this.position() 

    const printPositions = setInterval(() => {
      target.style.top = `${positions().top}%`
      target.style.left = `${positions().left}%`
    }, difficultSettings.difficultSelected)
    //para de gerar novas posições pro alvo quando acaba o tempo  
    const verifyTime = setInterval(() => {
      if(gameConfig.time <= 0) {
        clearInterval(printPositions)
        clearInterval(verifyTime)
      }
    }, 1000);
  }
}

export { target }