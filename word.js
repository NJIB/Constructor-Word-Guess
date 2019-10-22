class Word {
  
    /**
     * @param {array} wordToGuess_Array
     * @param {function} returnString
     * @param {function} checkLetter
     */
    constructor(wordToGuess) {
      this.wordToGuess_Array = wordToGuess.split("");
      this.returnString = function() {};
      this.checkLetter = function() {};
    }

  
    /**
     * @void
     */
    showWord() {
        console.log(`wordToGuess_Array: ${this.wordToGuess_Array}`);
    };
  }

  showWord();
//   // sets the variables "dogs" and "cats" to be animal objects
// // and initializes them with raining and noise properties
// const dogs = new Animal(true, 'Woof!');
// const cats = new Animal(false, 'Meow!');

// // calling dogs and cats makeNoise methods
// dogs.makeNoise();
// cats.makeNoise();

// // if we want, we can change an objects properties after they're created
// cats.raining = true;
// cats.makeNoise();

// const massHysteria = function(dogs, cats) {
//   if (dogs.raining === true && cats.raining === true) {
//     console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
//   }
// };

// massHysteria(dogs, cats);

  