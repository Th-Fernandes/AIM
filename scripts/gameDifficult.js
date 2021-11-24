const difficultSettings = {
  easy: 600,
  balanced: 400,
  hard: 250,
  difficultSelected: undefined, 
  difficultChoice ()  {
    const difficultContainer = document.querySelector('.difficult-options')

    difficultContainer.children[0].addEventListener('click', () => {
      this.difficultSelected = this.easy
      difficultContainer.children[0].style.backgroundColor = "#e18868"
      difficultContainer.children[1].style.backgroundColor = "transparent"
      difficultContainer.children[2].style.backgroundColor = "transparent"
    })
    
    difficultContainer.children[1].addEventListener('click', () => {
      this.difficultSelected = this.balanced
      difficultContainer.children[0].style.backgroundColor = "transparent"
      difficultContainer.children[1].style.backgroundColor = "#e56717"
      difficultContainer.children[2].style.backgroundColor = "transparent"
    }) 

    difficultContainer.children[2].addEventListener('click', () => {
      this.difficultSelected = this.hard
      difficultContainer.children[0].style.backgroundColor = "transparent"
      difficultContainer.children[1].style.backgroundColor = "transparent"
      difficultContainer.children[2].style.backgroundColor = "#C53817"
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