import React,{useState} from 'react'

const Test3 = () => {
    const [obj,setObj] = useState({
        "fname" : "",
        "lname" : "",
    });
    const [arr,setArr] = useState([]);
    
    const check = () => {
        setArr(prev => {
            return [...prev,obj]
        })
        console.log(arr);
    }
    const handleChange = (e) => {
        const {name,value} = e.target;
        setObj(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }
    return (
        <div>
            <input type="text" name = "fname" value = {obj.fname} onChange = {handleChange}/>
            <input type="text" name = "lname" value = {obj.lname} onChange = {handleChange}/>
            <button onClick = {check}>RUN</button>
            <div>{obj.fname} {obj.lname}</div>
        </div>
    )
}

export default Test3
