// This file contains TypeScript types to 'type' the questions JSON file. //
// Each question in the
// array, has a question to ask, four possible choices, and a correct answer.


// Our questions.json file contains a JavaScript object, which has a key,
// named "questions", which holds an array of questions (ie a Question[] array).
// Note: this will be the type of the variable allQuestions, which we define in
// App.tsx.  This is because to say a JavaScript object has a property named
// questions, which maps to a list of Questions, is markedly of type 'Questions',
// which is what the allQuestions variable is.  Furthermore, the type of the
// JavaScript object defined in questions.json is of type 'Questions' aswell
// (for the same reason.)
export type Questions = {
    // So our key/value pair looks like this -> questions: []
    questions: Question[];
}

// Each question has a question to ask, four possible choices, and a correct 
// answer.
export type Question = {
    // So our first key/value pair looks like this -> question: ""
    question: string;
    // Our second key/value pair looks like this -> choices: []
    choices: string[];
    // And our last looks like this -> correctAnswerIdx: x
    correctAnswerIdx: number;
}