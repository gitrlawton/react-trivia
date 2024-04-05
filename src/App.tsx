// Import our questions.  Note: "." means "from this file's directory..."
// questions is an alias for the entire contents of the file.  That's how
// importing from a json file goes.
import questions from "./questions.json"

import { Questions } from './types';

import { useState } from "react"

import StatBar from './components/StatBar';
import QuestionComp from "./components/Question";
import Reset from "./components/Reset";

function App() {
  // Initialize our questions to a variable 'allQuestions' of type 'Questions',
  // meaning allQuestions will be a JavaScript object -- which is the structure
  // of questions.json which we imported as questions.  Therefore, since 
  // allQuestions is equal to the JavaScript object in our questions.json file, 
  // it will have a property named 'questions', which maps to a list of questions,
  // affirming it to be of the type 'Questions'.
  // At the end of the day, this is grabbing our questions from our json file.
  const allQuestions = questions as Questions
  // Keep track of the current question that we're on, how many questions we've
  // gotten right, and how many questions we've gotten wrong using state. 
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)

  const [waitingToAdvance, setWaitingToAdvance] = useState(false)

  // Function to pass to QuestionComp, which will be called upon submitting (ie.
  // answering a question.)
  // Once we submit, we want to update whether we got it correct, incorrect and 
  // allow the user to advance to next question.
  const onSubmit = (correct: boolean) => {
    // Updating the count of total correct and incorrect answers chosen.
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);
    // Puts us in a state of waiting to advance to next question.
    setWaitingToAdvance(true);
  };

  // Function to advance to next question.
  const advance = () => {
    // Set that we are no longer waiting to advance.
    setWaitingToAdvance(false);
    // Incremement the number of the index for the question we are now
    // currently on.
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  }
  // Function to reset all the game information to 0 so we can play again.
  const reset = () => {
    setCurrentQuestionIdx(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setWaitingToAdvance(false);
  };
  // If the index of the question we are currently on is out of bounds (ie. we
  // have completed the last question), render the Reset component and pass it
  // the props it needs to reset the game.
  if (currentQuestionIdx >= allQuestions.questions.length) 
    return (
        // Remember, the Reset component is comprised of the player's score
        // and a button to click to play again. The button is the reason we
        // need to pass an onPress property.  The total questions and correct
        // questions are for calculating the score.
        <Reset 
            totalQuestions={allQuestions.questions.length} 
            correctQuestions={correctAnswers} 
            onPress={reset} 
        />
    );

  // Stat bar tells us what question we're on and how many correct/incorrect
  // answers we've chosen so far.
  return (
    <div>
      {/** Render the StatBar. */}
      <StatBar 
        // Pass the StatBar all the props that its type requires 
        // (these are defined in the Props type definition in StatBar.tsx)
        //
        // We want currentQuestion to not be display as its index (ie. 0),
        // so add 1 to represent the actual question number.
        currentQuestion={currentQuestionIdx + 1}
        // Number of questions is the length of the allQuestion's 'questions'
        // property (ie. the list of questions.)
        totalQuestions={allQuestions.questions.length} 
        // Use our state variables to pass the current number of correct
        // and incorrect answers.
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionComp 
        question={allQuestions.questions[currentQuestionIdx]} 
        onSubmit={onSubmit}
      />
      {/** Button with the text "Next Question" that will appear if 
       * waitingToAdvance is true, which means when we selected an answer choice
       * for the current question and we've seen if we were right or wrong. */}
      {waitingToAdvance && <button onClick={advance}>Next Question</button>}
    </div>
  )
}

// Note about the callback function being used, starting with the QuestionComp
// being rendered above:
/** App.tsx renders the QuestionComp.
 * -Inside of QuestionComp, we return an Answers component which is passed an 
 * onSubmit function.
 * -In Answers.tsx, we return an Answer component and pass it an onPress function.
 * -The onPress function is defined inside the Answers component near the top.
 * -The onPress function calls the props.onSubmit function which is the onSubmit 
 * function pass to the Answers component that is in the return statement of the 
 * QuestionComp component definition.
 * -The props.onSubmit function then calls the onSubmit function that is passed 
 * to the QuestionComp component that is returned in App.tsx.
 */

export default App
