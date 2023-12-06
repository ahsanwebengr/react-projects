import React, { useRef, useState } from 'react';
import './quiz.css';
import { data } from "../../data";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    let optionArray = [option1, option2, option3, option4];

    const CorrectAnswer = (e, answer) => {
        if (lock === false) {
            if (question.ans === answer) {
                e.target.classList.add('correct');
                setLock(true);
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add('wrong');
                setLock(true);
                optionArray[question.ans - 1].current.classList.add('correct');
            }
        }
    };

    const next = () => {
        if (lock === true) {
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            optionArray.map(option => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
            });
            return null;
            // setScore();
        }

    };
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <h2>{index + 1}. {question.question}</h2>
            <hr />
            <ul>
                <li ref={option1} onClick={(e) => CorrectAnswer(e, 2)}>{question.option2}</li>
                <li ref={option2} onClick={(e) => CorrectAnswer(e, 1)}>{question.option1}</li>
                <li ref={option3} onClick={(e) => CorrectAnswer(e, 3)}>{question.option3}</li>
                <li ref={option4} onClick={(e) => CorrectAnswer(e, 4)}>{question.option4}</li>
            </ul>
            <button onClick={next}>Next</button>
            <div className="index">{index + 1} of {data.length} Questions</div>
        </div>
    );
};

export default Quiz;