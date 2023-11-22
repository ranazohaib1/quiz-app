import React from 'react';

const EndQuiz = ({page, setPage, }) => {
    const handleEndQuiz = (second) => { 
        setPage({ end: false, start: true});
    }

    return (
        <React.Fragment>
            <div className='quiz-main '>
                    <div className='quiz-box'>
                        <h2>End Quiz</h2>
                        <hr className='quiz-bar' />
                        <h4>Are You Ready?</h4>
                        <p>Click a button to start quiz again</p>
                        <button className='quiz-button' onClick={handleEndQuiz}>Start Again</button>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default EndQuiz;