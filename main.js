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

const gameConfig = {
  time: 60,
  //cria um timer de 120 segundos e imprime na tela
  timer () {
    const timer = setInterval(() => {
      if(this.time <= 0) {
        //para o timer
        clearInterval(timer)
        // exibe a mensagem de tempo esgotado
        const timeOver = document.querySelector('.time-out')
        timeOver.classList.toggle('active')

        const finalScore = document.querySelector('#finalScore')
        const score = document.querySelector('#score')
        finalScore.textContent = `você acertou ${score.textContent[0] + score.textContent[1]} disparos com precisão`
        console.log(score.textContent)
      }
      
      
      const timeOnScreen = document.querySelector('.timer')

      if(this.time <= 10) timeOnScreen.style.color = "#f48d79"

      timeOnScreen.textContent = this.time
      this.time--
    },1000)
  }
}

export { target, gameConfig }