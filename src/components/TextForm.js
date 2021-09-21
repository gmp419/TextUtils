import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpperCaseClick = () => {
        console.log("click the button");
        let upperText = text.toUpperCase();
        myText(upperText)
    }
    const handleLowerCaseClick = () => {
        console.log("click the button");
        let upperText = text.toLowerCase();
        myText(upperText)
    }

    const handleOnChange = (event)=>{
        myText(event.target.value)
    }

    const [text, myText] = useState('Please, this is state.');
    // text = "new text"  wrong way to updare state
    // myText("new text") correct way to update state
    return(
        <>
        <div className="m-4 container">
            
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>   
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
            <button className="btn btn-info mx-2" onClick={handleLowerCaseClick}>Convert to Lower Case</button>

        </div>
        <div className="m-4 container card">
            <h2>Text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Text</h2>
            <p>{text}</p>
        </div>
        </>
    );
}