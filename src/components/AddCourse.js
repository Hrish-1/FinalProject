import React,{Profiler, useState} from 'react'
import Navbar from '../Navbar'
import 'bootstrap'
import AddCourse2 from './AddCourse2'

const AddCourse = () => {
    const [courseContent,setCourseContent] = useState({
        "courseName" : "",
        "photo" : ""
    });
    const [testCase,setTestCases] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setCourseContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }
    const addCourse = () => {
        console.log(courseContent);
        setTestCases( prev => [...prev,courseContent]);
        //setTestCases([...testContent,testCase]);
        setCourseContent({
            "courseName" : "",
            "photo" : ""
        });
        //setTestCases([]);
        console.log(testCase);
    }

    const deleteCourse = (id) => {
        setTestCases(prev => {
            return prev.filter((testcase,index) => {
                return index !== id;
            })
        })
    }

    


    return(
        <div className="container-fluid p-0">
            <Navbar />
            <div className =" my-4 d-flex justify-content-center">
            <h3 className="Thead addNew">Add New Course</h3>
            </div>
            <div className="row">
                <div className = "col-2"></div>
                <div className = "col-8">
                    <h5 className="Thead">New Course Name:</h5>
                    <textarea name="courseName" id="" cols="30" rows="2" value = {courseContent.courseName} onChange = {handleChange}/>
                    <br/>
                    <h5>Image:</h5>
                    <input type="text" name = "photo" value = {courseContent.photo} onChange={handleChange}/><br/>
                    <input type = "button" className = "btn btn-primary my-2" onClick = {addCourse} value = "Add"/>
                <ul style = {{listStyle : "none"}}>
                    {
                    testCase.map((testcase,index) => (
                        <li> <AddCourse2 key = {index} index = {index} del = {deleteCourse} input = {testcase.courseName} output = {testcase.photo} /></li>
                    ))
                    }
                </ul> 
                <button className = "btn btn-success">Submit</button>
                </div>
                <div className = "col-2"></div>  
            </div>
            



        </div>
    );
}

export default AddCourse