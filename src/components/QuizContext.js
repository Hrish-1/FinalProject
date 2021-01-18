import React,{createContext,useState} from 'react'

const QuizContext = createContext();

const QuizProvider = (props) => {
    const [questions,setQuestions] = useState([{
        question : "",
        correct_answer : "",
        incorrect_answers : []
    }]);

    const fetchQuestions = async () => {
        const response = await fetch("http://localhost:8080/quiz/all");
        const data = await response.json();
        console.log(data);
        setQuestions(data);
    }
    return (
        <QuizContext.Provider value = {{questions,fetchQuestions}}>{props.children}</QuizContext.Provider>
    )
}

export {QuizContext,QuizProvider}
