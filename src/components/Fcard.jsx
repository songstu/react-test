import { useState } from 'react';
import "./Fcard.css"

function Fcard({data, onCorrect}) {
    const [step, setStep] = useState('question');
    const [isflipped, setisFlipped] = useState(false);
    const [isScored, setisScored] = useState(false);

    const flipcard = () => {
        if (!isflipped) {
            setisFlipped(true);
        }
    };

    const handleCorrectClick = (e) =>{
        e.stopPropagation();

        if (!isScored) {
            onCorrect();
            setisScored(true);
        }
    };

    return (
        <div
            className={isflipped ? "fcard flipped" : "fcard"} onClick={flipcard}
        >
            <div className="card-con">
                {isflipped ? (
                    <div className="answer-wrap">
                        <p className="answer-text">{data.answer}</p>
                        {!isScored ? (
                            <button className='correct-btn' onClick={handleCorrectClick}>
                                정답 시
                            </button>
                        ) : (
                            <span className="done-text">
                                채점완료
                            </span>
                        )}
                    </div>
                ) : (
                    <p className="question-text">{data.question}</p>
                )}
            </div>
        </div> 
    );
}

export default Fcard;