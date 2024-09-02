const expandButton = document.querySelector('header button') //selecteer de button in het html bestand
expandButton.addEventListener('click', expand) // voeg de event click toe aan de expand functie

function expand () { // aanmaken van de functie expand 
  document.body.classList.toggle('expand') // een toggle toevoegen aan de expand zodat je in en uit kan zoomen
}
