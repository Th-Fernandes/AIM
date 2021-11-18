const target = {
  create() {
    //cria o circulo na tela
    const createTarget = document.createElement('div')
    createTarget.classList.add('target')
    let score = 0
    // ao clicar, contabiliza pontos
    createTarget.addEventListener('click', () => {
      score++

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

    setInterval(() => {
      target.style.top = `${positions().top}%`
      target.style.left = `${positions().left}%`
    }, 4000)

  }
}

const gameConfig = {
  //cria um timer de 120 segundos e imprime na tela
  timer () {
    let time = 120
    const timer = setInterval(() => {
      if(time <= 0) clearInterval(timer)
      
      const timeOnScreen = document.querySelector('.timer')

      if(time <= 10) timeOnScreen.style.color = "#f48d79"

      timeOnScreen.textContent = time
      time--
    },1000)
  }
}

export { target, gameConfig }