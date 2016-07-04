const Question = require('./question')
const Answer = require('./answer')

const questions = [
  new Question('Who are you?', 'Justin'),
  new Question('How old are you?', '45'),
  new Question('Where do you live?', 'Resevoir')
]

// const answers = [
//   new Answer('Justin'),
//   new Answer('45'),
//   new Answer('Resevoir')
// ]

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let index = 0;

console.log(questions[0].prompt)
rl.prompt()

rl.on('line', (input) => {
  if (input === "quit") {
    rl.close();
    return;
  } else {
    console.log(`Recieved: ${input}`)
    if ( questions[index].isRightAnswer(input) ){
      console.log('answer is correct')
    } else {
      console.log('answer is wrong')
    }
    ++index
    if (index === questions.length) {
      rl.close()
      return
    }
    console.log(questions[index].prompt)
    rl.prompt()
  }
})
