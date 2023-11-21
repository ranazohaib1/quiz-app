import React, { useEffect, useState } from 'react'
import StartQuiz from './StartQuiz';
import Questions from './Questions';

const Quiz = () => {

    const [data, setData] = useState([]);
    const [selectedQuestion, setSelectedQuestion ] = useState();
    const [index, setIndex ] = useState(-1);
    const [page, setPage] = useState({
        start: true,
        questions: false,
        end: false
    });

    useEffect(()=>{
        fetch('data.json')
            .then((res) => res.json()) 
            .then((dta)=> {setData(dta); setSelectedQuestion(dta[0])});
    },[]);

    const showNext = (prevQuestion) => { 
        setSelectedQuestion(data[index]);
        setIndex(index+1);
    }

    const checkAnswer = () => { 
        
    };

    return (
        <React.Fragment>
            {page.start && ( 
                <StartQuiz page={page} setPage={setPage} showNext={showNext} />
            )}
            {page.questions && ( 
                <Questions page={page} setPage={setPage} data={data} showNext={showNext} selectedQuestion={selectedQuestion} />
            )}
        </React.Fragment>
    )
}

export default Quiz;