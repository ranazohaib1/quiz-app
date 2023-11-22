import React, { useState } from 'react';

const Questions = ({page, setPage, data, showNext, selectedQuestion, questionNumber }) => {
    const [ correctAnswerIndex, setCorrectAnswerIndex ] = useState(-1);
    const [ wrongAnswerIndex, setWrongAnswerIndex ] = useState(-1);

    const handleCheckAnswer = (selectedOption,index) => { 
        console.log("coming inside")
        console.log('e.target.value', selectedOption);
        if(selectedOption === selectedQuestion?.answer){
            setCorrectAnswerIndex(index);
        }
        else{
            setCorrectAnswerIndex(selectedQuestion.options?.findIndex((option)=> option === selectedQuestion?.answer))
            setWrongAnswerIndex(index)
        }
    };

    const handleNextQuestion = (second) => { 
        setCorrectAnswerIndex(-1);
        setWrongAnswerIndex(-1);
        if(data.length === questionNumber){
            setPage({ start: false, end: true })
        }
        else {
            showNext();
        }
    }

    return (
        <React.Fragment>
            <div className='quiz-main '>
                <div className='quiz-box col-12 col-md-5'>
                    <h2>Online Quiz</h2>
                    <hr className='quiz-bar' />
                        <div className='container'>
                        <h4 className='quiz-questions'>{questionNumber}. {selectedQuestion?.question}</h4>
                        {selectedQuestion?.options?.map(( option, index) => 
                            <div className='quiz-option-box' style={{backgroundColor: correctAnswerIndex === index ? "green": wrongAnswerIndex === index && "red" }} onClick={()=>handleCheckAnswer(option, index)}>
                                <div className='quiz-option' > {index + 1}. {option}</div>
                            </div>
                        )}
                        <button className='quiz-button' onClick={handleNextQuestion}>Next Question</button>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Questions;