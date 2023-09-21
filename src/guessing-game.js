class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.currentGuess;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentGuess = Math.round((this.max - this.min) / 2) + this.min;
    return this.currentGuess;
  }

  lower() {
    this.setRange(this.min, this.currentGuess);
  }

  greater() {
    this.setRange(this.currentGuess, this.max);
  }
}

module.exports = GuessingGame;
