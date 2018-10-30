var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var auxCards = [];

  do {
    auxCards.push(this.cards.splice(Math.floor(Math.random() * this.cards.length),1))
  } while (this.cards.length);

  this.cards = auxCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    this.pairsClicked++;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === (this.cards.length)/2) return true;

  return false;
};