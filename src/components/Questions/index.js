import React from 'react';

const Questions = ({page, setPage, data, showNext, selectedQuestion }) => {
    return (
        <React.Fragment>
            <div className='quiz-main '>
                <div className='quiz-box'>
                    <h2>Online Quiz</h2>
                    <hr className='quiz-bar' />
                    {selectedQuestion?.map((question)=>{
                        return (
                            <>
                                <h4 className='quiz-questions'>Question</h4>
                                <div className='quiz-options'>Option 1</div>
                                <div className='quiz-options'>Option 2</div>
                                <div className='quiz-options'>Option 3</div>
                                <div className='quiz-options'>Option 4</div>
                                <button className='quiz-button'>Quiz</button>
                            </>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Questions;