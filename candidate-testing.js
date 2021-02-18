const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions=[];
let correctAnswers=[];
let candidateAnswers=[];
let numberOfCorrectAnswer=0;


function askForName() {
  candidateName=input.question("Candidate Name: ");
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  correctAnswers.push("Sally Ride");
  correctAnswers.push("True");
  correctAnswers.push("40");
  correctAnswers.push("Trajectory");
  correctAnswers.push("3");
  questions.push("Who was the first American woman in space? ");
  questions.push("True or false: 5000 meters = 5 kilometers. ");
  questions.push("(5 + 3)/2 * 10 = ?");
  questions.push("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?");
  questions.push("What is the minimum crew size for the ISS?")
  
  for(let i=0;i<questions.length;i++)
  {
    console.log(`${i+1}) ${questions[i]}`);
    candidateAnswers.push(input.question("Your Answer: "));
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);

  } 
  }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade;
  
  for(let i=0;i<correctAnswers.length;i++)
  {
    if((correctAnswers[i]).toLowerCase()===(candidateAnswers[i]).toLowerCase())
    {
      numberOfCorrectAnswer+=1;
    }
  }
  grade=(numberOfCorrectAnswer/questions.length)*100;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log(`Hello ${candidateName} Welcome into the Quiz`);
  
  
  askQuestion();
  let result=gradeQuiz(this.candidateAnswers);
  console.log(`\n>>> Overall Grade: ${result}% (${numberOfCorrectAnswer} of ${questions.length} responses correct) <<< `);
  if(result<80)
  console.log(">>> Status: FAILED <<<");
  else
  console.log(">>> Status: PASSED <<<");
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};