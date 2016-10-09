/**
 * class of the question
 * basic skeleton of a question
 */
export class Question {
    qId: number;
    subId: number;
    qTypeID: string;
    question: string;
    answers: string[];
    ansID: number[];
    correctAnswerIndex: number;
}