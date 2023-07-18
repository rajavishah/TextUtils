import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted into LowerCase", 'success')
    
    }

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted into UpperCase", 'success')
    
    }

    const handleClearClick = () => {
        const newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", 'success')
    
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard", 'success')
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra Spaces have been removed", 'success')
    
    }

    const [text, setText] = useState("Enter your text here...");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1 className="mb-3">{props.heading}</h1>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="9"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear-Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy-Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Exta-Space</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summary...</h3>
        <p><b>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</b></p>
        <p><b>{0.008*text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</b></p>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to Preview!'}</p>
    </div>
    </>
  );
}
