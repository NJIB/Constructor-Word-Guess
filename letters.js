class Letter {
  
    /**
     * @param {string} letter
     * @param {boolean} letterGuessedYet
     * @param {function} displayMode // returns letter or placeholder
     * @param {function} checkMatch // checks if argument matches underlying character
     */
    constructor(letter) {
      this.letter = letter;
      this.letterGuessedYet = false;
      this.displayMode = function() {};
      this.checkMatch = function() {};
    }

  
    /**
     * @void
     */
    showWord() {
        console.log(`wordToGuess_Array: ${this.wordToGuess_Array}`);
    };
  }
