// Defining a type for the props we will pass to our StatBar.
// This will allows us to reference its different fields according to the 
// ones we define.
type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
}

// Pass props with type 'Props'
function StatBar(props: Props) {
    return (
        <div>
            <p>Questions: {props.currentQuestion}/{props.totalQuestions}</p>
            <p>Correct: {props.correct}</p>
            <p>Incorrect: {props.incorrect}</p>
        </div>
    )
}

export default StatBar;