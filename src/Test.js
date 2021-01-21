import React,{useState} from 'react'
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Test.css'
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'bootstrap'
import NavBar from './Navbar'
import Test2 from './Test2'
import Immutable from 'immutable'
import TestCase from './TestCase'

const Test = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const  [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
      setEditorState(state);
      convertContentToHTML();
    }
    const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
      console.log(convertedContent);
    }
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
    }
    const [testContent,setTestContent] = useState({
        "input" : "",
        "output" : ""
    });
    const [testCase,setTestCases] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setTestContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }

    const addTestCase = () => {
        console.log(testContent);
        setTestCases( prev => [...prev,testContent]);
        //setTestCases([...testContent,testCase]);
        setTestContent({
            "input" : "",
            "output" : ""
        });
        //setTestCases([]);
        console.log(testCase);
    }

    const deleteTest = (id) => {
        setTestCases(prev => {
            return prev.filter((testcase,index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className = "container-fluid p-0">
            <NavBar />
            <div className = "row">
                <div className = "col-2"></div>
                <div className = "col-8">
                    <Test2 />
                </div>
                <div className = "col-2"></div>
            </div>
            <div className = "row">
            <div className = "col-2"></div>
                <div className = "col-8">
                <p className = "mt-3">Description</p>
                    <Editor 
                        editorState={editorState}
                        onEditorStateChange={handleEditorChange}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                   />
                    <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>

                    <p className = "mt-3">Test Cases</p>
                    <div>
                        <p>input</p>
                        <textarea name="input" id="" cols="30" rows="2" value = {testContent.input} onChange = {handleChange}/>
                        <p>output</p>
                        <textarea name="output" id="" cols="30" rows="2" value = {testContent.output} onChange = {handleChange}/><br/>
                        <input type = "button" className = "btn btn-outline-secondary mb-3" onClick = {addTestCase} value = "Add"/>
                        <ul style = {{listStyle : "none"}}>
                         {
                            testCase.map((testcase,index) => (
                                <li> <TestCase key = {index} index = {index} del = {deleteTest} input = {testcase.input} output = {testcase.output} /></li>
                            ))
                         }
                        </ul>   
                    </div>
                    <button className = "btn btn-outline-success">Submit</button>
                </div>
                <div className = "col-2"></div>
            </div>
            
        </div>
    )
}

export default Test
