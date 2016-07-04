const Answer = require('./answer')

class Question {
  constructor (openingPrompt, correctAnswer) {
    this.prompt = openingPrompt
    this.answer = correctAnswer
  }
  isRightAnswer(guess){
    return (guess === this.answer)
  }
}

module.exports = Question
