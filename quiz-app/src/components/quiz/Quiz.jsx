import React, { useState } from 'react';
import './quiz.css';
import { data } from "../../data";

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);

    const CorrectAnswer = (e, answer) => {
        if (lock === false) {
            if (question.ans === answer) {
                e.target.classList.add('correct');
                setLock(true);
            } else {
                e.target.classList.add('wrong');
                setLock(true);
            }
        }
    };
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>
            <ul>
                <li onClick={(e) => CorrectAnswer(e, 1)}>{question.option1}</li>
                <li onClick={(e) => CorrectAnswer(e, 2)}>{question.option2}</li>
                <li onClick={(e) => CorrectAnswer(e, 3)}>{question.option3}</li>
                <li onClick={(e) => CorrectAnswer(e, 4)}>{question.option4}</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 5 Questions</div>
        </div>
    );
};

export default Quiz;