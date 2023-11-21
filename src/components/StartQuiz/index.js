import React from 'react'

const StartQuiz = ({ page, setPage, showNext }) => {
    const handleStartQuiz = (second) => { 
        showNext();
        setPage({ start: false, questions: true});
    }

    return (
        <React.Fragment>
            <div className='quiz-main '>
                    <div className='quiz-box'>
                        <h2>Start Quiz</h2>
                        <hr className='quiz-bar' />
                        <h4>Are You Ready?</h4>
                        <p>Click a button to start a  quiz</p>
                        <button className='quiz-button' onClick={handleStartQuiz}>Start Quiz</button>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default StartQuiz;