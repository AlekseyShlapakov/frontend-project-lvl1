import readlineSync from 'readline-sync';
import * as engine from './../index.js';

const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenParityGame = () => {
  engine.greeting();
  const userName = readlineSync.question('May I have your name? ');
  engine.greetingUserName(userName);

  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine.questionFunc(question);

  for (let i = 0; i < 3;) {
    const num = Math.floor(Math.random() * 21);
    const userAnswer =
  readlineSync.question(`Question: ${num}\nYour answer: `);

    if (correctAnswer(num) === userAnswer) {
      engine.correct();
      i += 1;

      if (i >= 3) {
        engine.congratulation(userName);
      }
    } else {
      engine.ifWrongAnswer(correctAnswer(num), userName, userAnswer);
      break;
    }
  };
};

// const isNumberEven = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   for (let i = 0; i < 3;) {
//   const num = Math.floor(Math.random() * 21);
//     const userAnswer =
//   readlineSync.question(`Question: ${num}\nYour answer: `);

//     if (isUserAnswer(num) === userAnswer) {
//       console.log('Correct!');
//       i += 1;
//     if (i >= 3) {
//       console.log(`Congratulations, ${userName}!`);
//     }
//     } else {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was
//                    ${isUserAnswer(num)}. Let's try again, ${userName}!`);
//       break;
//     }
//   };
// };

// export default isNumberEven;

export default evenParityGame;