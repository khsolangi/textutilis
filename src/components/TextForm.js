import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");

    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleToLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleOnChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <div>
        <div className={`my-3 d-flex flex-column align-items-start ${props.mode === "light" ? "text-dark" : "text-light"}`}>
            <h2 >Enter text to analyze</h2>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className={`form-control ${props.mode === "light" ? "text-dark": "text-light"}`} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode === "light" ? "white" : "grey"}}></textarea>
            <div className="buttons my-3">
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>To Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleToLower}>To Lower Case</button>
            </div>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
