import React,{useState} from 'react'
import './Test2.css'
import Input from './Input'
const Test2 = () => {
    return (
        <div className = "">
            <h4 className = "mx-3 my-3 text-center">Create a new problem</h4>
            <form action="#">
               <Input name = "problem name" />
               {/* <p className = "mt-3">difficulty</p> */}
               <p className = "mt-3">select difficulty</p>
                <select name="difficulty" id="difficulty"
                 style = {{width : "150px",height : "30px",outline : "none"}}
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
               <Input name = "tags" />
            </form>
        </div>
    )
}

export default Test2
