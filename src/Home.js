import React,{useState} from "react";
import Nav from "./Navbar";
import './Home.css';
import Course from './components/Course.js';
import image from './images/10088.jpg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import cpp from './images/cpp.png';
import java from './images/java.png';
import nodejs from './images/nodejs.png';
import python from './images/python.png';
import chash from './images/chash.png';
import { Link } from "react-router-dom";

function Home() {
    //const {asyncCaller} = useContext(QuizContext);
    const languages = [{
                            "name" : chash,
                            "first" :"C-SHARP"
                        },
                        {
                            "name" : cpp,
                            "first" :"C++"
                        },
                        {
                            "name" : java,
                            "first" : "JAVA"
                        },
                        {
                            "name" : nodejs,
                            "first" : "NODEJS"
                        },
                        {
                            "name" : python,
                            "first" : "PYTHON"
                        }
                        ];

    const [language,setLanguage] = useState({
                0 : "Csharp1",
                1 : "Cpp1",
                2 : "Java1",
                3 : "Nodejs1",
                4 : "Python1"
    });
    return( 
    <div className = "container-fluid">
        <Nav/>
        <header className = "d-flex">
            <img src = {image} height = "500px" width = "900px" alt = "ed"/>
            <div className = "d-flex justify-content-center align-items-center">
                <div>
                    <h1 className = "font-weight-bold" style = {{"color" : "#112d4e"}}>Learn to Code <br/> for Free</h1>
                    <p>Learn to code with our beginner-friendly tutorials and examples. Read tutorials, try examples, write programs, and learn to code.</p>
                </div>
            </div>    
        </header>
        <div className="courses-offered">
            <p className = "font-weight-bold mx-4">COURSES OFFERED</p>
            <div className = "d-flex flex-wrap ml-4">
                { languages.map( (lang,index) => (
                    <Link to = {"/"+language[index]} style = {{textDecoration : "none"}}><Course title = {lang.name} info = {lang.first}/></Link> 
                ))}
            </div>
        </div>
    </div>
    );

}

export default Home;