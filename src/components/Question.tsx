// Import the Question type so we can use it for defining the props.
import { Question } from "../types"
import Answers from "./Answers"

type Props = {
    question: Question
    // onSubmit is the property name.  It is of type function, and doesn't
    // return anything (hence, => void).  The function requires a parameter,
    // named 'correct', which is of type boolean.
    // Note: this function will be called when we submit the question so the
    // main app knows to advance us to the next question and tell us if we 
    // chose the correct or incorrect answer.
    onSubmit: (correct: boolean) => void
}

// Component for each question.
function QuestionComp(props: Props) {
    return (
        <div>
            {/** Render what the question is. */}
            <h3>{props.question.question}</h3>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    )
}

export default QuestionComp;