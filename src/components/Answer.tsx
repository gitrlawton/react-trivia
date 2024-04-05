type Props = {
    onPress: () => void;
    // This is the answer text.
    text: string;
    // '?' means this field is optional to pass.
    // color will tells us if we need to display this answer as white,
    // or red or green depending on if it is correct or not.  If not color
    // is based, it means we don't need to set the color to anything.  If
    // a color is passed, it will either be "red" or "green".
    color?: string;
    // Once we have answered the question, we don't want to be able to
    // click on an answer again.
    disabled: boolean;
}

function Answer(props: Props) {
    // If we have a color provided (passed) to us, then we are going to create
    // and object literal which has a property named 'color' and set its value
    // for color equal to the color passed via props.  Then, we'll apply this 
    // style to the Answer text via the span tag.
    const colorStyle = props.color ? { color: props.color} : {};

    return (
        <button onClick={props.onPress} disabled={props.disabled}>
            <span style={colorStyle}>{props.text}</span>
        </button>
    );
}

export default Answer;