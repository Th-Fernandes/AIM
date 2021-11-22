import { gameConfig } from "./timer.js"

const target = {
  create() {
    //cria o circulo na tela
    const createTarget = document.createElement('div')
    createTarget.classList.add('target')
    let score = 0
    // ao clicar, contabiliza pontos
    createTarget.addEventListener('click', () => {
      score++
      //imprime a pontuação na tela
      const printScore = document.querySelector('#score')
      printScore.textContent = `${score} shoots!!`
      printScore.classList.add('active')
      setTimeout(() => printScore.classList.remove('active'), 500)
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
    }, 900)
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