import React, { useEffect, useState } from 'react'
import StartQuiz from './StartQuiz';
import Questions from './Questions';
import EndQuiz from './EndQuiz';

const Quiz = () => {
    const [data, setData] = useState([]);
    const [selectedQuestion, setSelectedQuestion ] = useState();
    const [index, setIndex ] = useState(0);
    const [page, setPage] = useState({
        start: true,
        questions: false,
        end: false
    });

    useEffect(()=>{
        fetch('data.json')
            .then((res) => res.json()) 
            .then((dta)=> { setData(dta); setSelectedQuestion(dta[0])});
    },[]);

    const showNext = (prevQuestion) => { 

        setSelectedQuestion(data[index]);
        setIndex(index+1);
    }

    return (
        <React.Fragment>
            {page.start && ( 
                <StartQuiz page={page} setPage={setPage} showNext={showNext} />
            )}
            {page.questions && ( 
                <Questions page={page} setPage={setPage} data={data} showNext={showNext} selectedQuestion={selectedQuestion} questionNumber={index} />
            )}
            {page.end && ( 
                <EndQuiz page={page} setPage={setPage} data={data} showNext={showNext} selectedQuestion={selectedQuestion} questionNumber={index} />
            )}
        </React.Fragment>
    )
}

export default Quiz;