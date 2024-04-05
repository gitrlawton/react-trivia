import { Question } from "../types"
import Answer from "./Answer"

import { useState } from "react"
// This will be used to remove the red/green color effect from the text
// and return the next question's answer choices back to white.
import { useEffect } from "react"

type Props = {
    question: Question
    onSubmit: (correct: boolean) => void
}

// Where we'll handle the logic for indicating if we got a question correct
// or incorrect.
function Answers(props: Props) {
    // Piece of state to keep track of if we already selected an answer.
    const [showAnswer, setShowAnswer] = useState(false);
    // Setting the showAnswer state back to false, which will set the color
    // of the answer choices from red and green back to white.
    useEffect(() => {
        setShowAnswer(false);
    }, [props.question]);

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

    // If we're revealing the correct answer then we want the choices to be 
    // either red or green.
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
                {/** Note: Because this return statement rendering the Answer 
                component is inside the body of the map function above, it is 
                rendering each answer (ie. choice) in 'choices', based on the 
                index for the question we are currently on. */}
                return <Answer 
                            // The choice is the answer. 
                            text={choice} 
                            onPress={() => onPress(idx)}
                            // Does it need to be red or green. 
                            color={color} 
                            // This prop disables our ability to click on the
                            // Answer, once we already clicked on an Answer.
                            disabled={showAnswer}
                            // The map function requires a key property.
                            key={idx}
                        />;
            })}
        </div>
    )
}

export default Answers;