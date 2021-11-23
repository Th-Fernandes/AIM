const difficultSettings = {
  easy: 600,
  balanced: 400,
  hard: 250,
  difficultSelected: 400, //valor inicial, pra caso o usuário n selecione nenhuma dificuldade
  difficultChoice ()  {
    const difficultContainer = document.querySelector('.difficult-options')

    difficultContainer.children[0].addEventListener('click', () => {
      this.difficultSelected = this.easy
    })
    
    difficultContainer.children[1].addEventListener('click', () => {
      this.difficultSelected = this.balanced
    }) 

    difficultContainer.children[2].addEventListener('click', () => {
      this.difficultSelected = this.hard
    }) 
    
    

    /*
    const difficultOptions = document.querySelector('#balanced')
    difficultOptions.addEventListener('click', () => {
      this.difficultSelected = this.balanced
    }) 
    */
  }
}

export { difficultSettings }