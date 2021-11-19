import { target } from "../main.js"

const gameConfig = {
  time: 6,
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
        const score = () => {
          let score = document.querySelector('#score')
          score = score.textContent[0] + score.textContent[1]
          return score
        }
        
        finalScore.textContent = `você acertou ${score()} disparos com precisão`
        
        const removeTarget = document.querySelector('.target')
        removeTarget.remove()
      }
      const timeOnScreen = document.querySelector('.timer')

      if(this.time <= 10) timeOnScreen.style.color = "#f48d79"

      timeOnScreen.textContent = this.time
      this.time--
    },1000)
  }
}

const timeOutSettings = {
  playAgain() {
      const playAgainButton = document.querySelector('#playAgain')
      playAgainButton.addEventListener('click', () => {
        const timeOver = document.querySelector('.time-out')
        timeOver.classList.toggle('active')

        gameConfig.time = 60
        
        target.printResults()
        gameConfig.timer()
    })
  },
  //trás de volta o menu principal
  backToMenu() {
    const backToMenu = document.querySelector('#backToMenu')
    backToMenu.addEventListener('click', () => {
      const menu = document.querySelector('.main-menu')
      menu.classList.remove('hide')
    })
  }
}
// faz funcionar o botão de jogar novamente
timeOutSettings.playAgain()
//faz funcionar o botao de voltar ao menu principal após acabar o tempo 
timeOutSettings.backToMenu()

export { gameConfig }