// Import our questions.  Note: "." means "from this file's directory..."
// questions is an alias for the entire contents of the file.  That's how
// importing from a json file goes.
import questions from "./questions.json"

import { Questions } from './types';

import { useState } from "react"

import StatBar from './components/StatBar';

function App() {
  // Initialize our questions to a variable 'allQuestions' of type 'Questions',
  // meaning allQuestions will be a JavaScript object -- which is the structure
  // of questions.json which we imported as questions.  Therefore, since 
  // allQuestions is equal to the JavaScript object in our questions.json file, 
  // it will have a property named 'questions', which maps to a list of questions,
  // affirming it to be of the type 'Questions'.
  const allQuestions = questions as Questions
  // Keep track of the current question that we're on, how many questions we've
  // gotten right, and how many questions we've gotten wrong using state. 
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)
  // Stat bar tells us what question we're on and how many correct/incorrect
  // answers we've chosen so far.

  return (
    // Render the StatBar.  Pass it all the props that its type requires (these
    // are defined in the Props type definition.)
    <div>
      <StatBar 
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestions.questions.length} 
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
    </div>
  )
}

export default App
