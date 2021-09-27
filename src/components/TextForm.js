import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpperCaseClick = () => {
        console.log("click the button");
        let upperText = text.toUpperCase();
        myText(upperText);
        props.showAlert("Converted to upper case","success")
    }
    const handleLowerCaseClick = () => {
        console.log("click the button");
        let upperText = text.toLowerCase();
        myText(upperText)
        props.showAlert("Converted to lower case","danger")
    }

    const handleOnChange = (event)=>{
        myText(event.target.value)
    }

    const clearText = ()=>{
        let deleteText = '';
        myText(deleteText)
    }

    const rmExtraSpace= ()=>{
        let newText = text.split(/[ ]+/);
        myText(newText.join(" "))
    }
    

    const [text, myText] = useState('Please, this is state.');
    // text = "new text"  wrong way to updare state
    // myText("new text") correct way to update state
    return(
        <>
        <div className="m-4 container" style={{color:props.mode ==='dark'?'#fff':'black'}}>
    
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">
                <h1>{props.heading}</h1>

                </label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'#fff':'black'}} rows="8"></textarea>
            </div>   
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
            <button className="btn btn-info mx-2" onClick={handleLowerCaseClick}>Convert to Lower Case</button>
            <button className="btn btn-success mx-2" onClick={clearText}>Delete All Text</button>
            <button className="btn btn-primary" onClick={rmExtraSpace} type="button" >Remove Extra Space</button>

            
        </div>
        <div className="m-4 container " style={{color:props.mode ==='dark'?'#fff':'black', backgroundColor:props.mode ==='dark'?'grey':'white',border:'1px solid #fff'}}>
            <h2>Text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"please enter the text here"}</p>
        </div>
        </>
    );
}