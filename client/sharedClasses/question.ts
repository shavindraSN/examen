import { Answer } from './answer';

export class Question {
    id: number;
    qno: number
    correct_ans_no: number;
    question_time: number;
    paper_id: number;
    subject_id: number;
    is_image: boolean;
    image_url: string;
    question: string;
    answers: Answer[];
}