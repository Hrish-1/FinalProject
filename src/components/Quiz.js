import React,{useContext, useState,useEffect} from 'react'
import {QuizContext} from './QuizContext'
import 'bootstrap'

export const Quiz = () => {
    const {questions,fetchQuestions} = useContext(QuizContext);
    const [correct,setCorrect] = useState(0);
    const [index,setIndex] = useState(0);
    const [isModalOpen,setIsModalOpen] = useState(false);

    useEffect(() =>{
        fetchQuestions();
    },[]);

    const { question, correct_answer, incorrect_answers } = questions[index];

    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4)
    if (tempIndex === 3) {
      answers.push(correct_answer)
    } else {
      answers.push(answers[tempIndex])
      answers[tempIndex] = correct_answer
    }
    // const openModal = () => {
    //     setIsModalOpen(true);
    // }
    const nextQuestion = () => {
        setIndex( prevIndex => {
            const index = prevIndex + 1;
            if(index > questions.length - 1){
                //openModal();
                return 0;
            }else{
                return index;
            }
        });
    }
    const checkAnswer = (value) => {
        if(value)
            setCorrect( prevValue => prevValue + 1)
        nextQuestion();
    }
    
    return (
        <div className = "d-flex justify-content-center align-items-center" style = {{height : "90vh"}}>
        <div>
             <h3 className = "my-4" dangerouslySetInnerHTML = {{__html : question}}/>
             <div className = "d-flex flex-column align-items-center">
                {answers.map((answer,index) => (
                    <button className = "btn btn-outline-info"
                    style={{width : "15em",margin : "0.5em 0.5em"}}
                    key = {index}
                    onClick = {() => {checkAnswer(answer === correct_answer)}}>
                    {answer}</button>
                ))}
            </div>
        </div>
        </div>
    )
}
