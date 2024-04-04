import { Question } from "../types"
import Answer from "./Answer"

import { useState } from "react"

type Props = {
    question: Question
    onSubmit: (correct: boolean) => void
}

// Where we'll handle the logic for indicating if we got a question correct
// or incorrect.
function Answers(props: Props) {
    // Piece of state to keep track of if we already selected an answer.
    const [showAnswer, setShowAnswer] = useState(false);
    // Function that will be called when we click on one of the answers.
    // 'idx' is the index of the answer we selected.
    const onPress = (idx: number) => {
        // Set that we want to show the answer.
        setShowAnswer(true)
        // Call the onSubmit function and pass it whether or not we chose
        // the correct answer (this boolean translates to true if the index 
        // of the answer we selected is equal to the correctAnswer index, and
        // false otherwise.)
        props.onSubmit(props.question.correctAnswerIdx === idx)
    }

    // If we're displaying the answer then we want the answer to be either 
    // green or red.
    return (
        <div>
            {/** map will iterate over all the choices.  Take in the choice
             * and the index of the choice (because having the index will allow
             * us to confirm if that choice is correct or not.) */}
            {props.question.choices.map((choice, idx) => {

                let color = "";

                if (showAnswer && props.question.correctAnswerIdx === idx) color = 'green';
                else if (showAnswer) color = 'red';

                {/** When React hears the onPress event, it will generate an
                anonymous function which will call the onPress function (which
                we defined above), which in turn will call the props.onSubmit()
                function to check if the answer we chose was the correct one. */}
                return <Answer 
                            text={choice} 
                            onPress={() => onPress(idx)} 
                            color={color} 
                            disabled={showAnswer}
                        />;
            })}
        </div>
    )
}

export default Answers;