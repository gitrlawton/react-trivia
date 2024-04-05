type Props = {
    totalQuestions: number;
    correctQuestions: number;
    // The fact this prop has an onPress property means we are going to
    // be using it for a button we will be returning.
    // The button will call a function that will reset the game for us.
    onPress: () => void;
}

function Reset(props: Props) {
    return (
        <div>
            {/** Show the player's score which is a percentage out of 100. */}
            <h1>You scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
            <button onClick={props.onPress}>Press to Try Again!</button>
        </div>
    )
}

export default Reset