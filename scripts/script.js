document.querySelector('.card-container').addEventListener('click', function () {
  const card = document.querySelector('.card');
  if (card.style.transform === 'rotateX(180deg)') {
      card.style.transform = 'rotateX(0deg)';
  } else {
      card.style.transform = 'rotateX(180deg)';
  }
  console.log(card)
});
