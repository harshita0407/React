import React,{ useState } from "react";
export default function TextForm({heading}) {
const handleUpClick=()=>
{
  // console.log(`Uppercase was clicked ${text}`);
  let newText=text.toUpperCase();
  setText(newText)
}
const handleLoClick=()=>
{
  let newText=text.toLowerCase();
  setText(newText)
}
const handleOnChange=(event)=>
  {
    // console.log("On change");
    setText(event.target.value);
  }
const[text,setText]=useState('');
    return(
      <>
        <div className="container">
        <h2>{heading}</h2>
          <div>
          <textarea className="form-control" id="myBox" value={text} rows={8} onChange={handleOnChange} placeholder="Enter your text here"></textarea>
          </div>
          <button className="Convertbtn mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="Convertbtn mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        
        <div className="container">
         <h2>Your text summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minute to read it</p>
         <h3>Preview</h3>
         <p>{text}</p>
        </div>
        </>
    )
}