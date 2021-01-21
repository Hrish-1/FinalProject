import React,{createContext,useState} from 'react'

const QuizContext = createContext();

const QuizProvider = (props) => {

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [correct,setCorrect] = useState(0);
    const [index,setIndex] = useState(0);

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
    const openModal = () => {
        setIsModalOpen(true);
    }
    const nextQuestion = () => {
        setIndex( prevIndex => {
            const index = prevIndex + 1;
            if(index > questions.length - 1){
                openModal();
                return 0;
            }else{
                return index;
            }
        });
    }
    const closeModal = () => {
        setCorrect(0)
        setIsModalOpen(false)
    }

    const checkAnswer = (value) => {
        if(value)
            setCorrect( prevValue => prevValue + 1)
        nextQuestion();
    }
    return (
        <QuizContext.Provider value =
        {
            {
                 questions,
                 fetchQuestions,
                 isModalOpen,
                 index,
                 nextQuestion,
                 checkAnswer,
                 openModal,
                 closeModal,
                 correct
            }
        }>{props.children}</QuizContext.Provider>
    )
}

export {QuizContext,QuizProvider}
