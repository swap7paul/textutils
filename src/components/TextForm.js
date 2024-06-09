import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upercase was clicked. " + text);
        let newText= text.toUpperCase(); 
        setText(newText);
    }
    const handleOnChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value);
  }
    const handleLowClick =()=>{
      let newText= text.toLowerCase();
      setText(newText);
    }
    const handleClearClick =()=>{
      
      let newText= " ";
      setText(newText);
    }
    
    const handleInvClick =()=>{
      var newText="";
      let i=0;
      while(i<text.length){
      var n= text.charAt(i);
      if (n===n.toUpperCase()){
        n=n.toLowerCase();
      }
      else{
        n=n.toUpperCase();
        }
        i+=1;
        newText+=n;
      }
        setText(newText)
    }
    
    
    
    const [text, setText] = useState('');
    // setText("New Text");
    return (
    <>
      <div className="container my-3">
      <div className="mb-3">
        <h1>{props.heading}</h1>
      <label htmlFor="myBox" className="form-label"></label>
      <textarea className="form-control" id="myBox" rows="6" placeholder="enter here"value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary " onClick={handleUpClick} on>Convert to UpperCase</button> 
    <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick} on>Convert to LowerCase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleInvClick} on>Convert to InverseCase</button>
    <button className="btn btn-outline-primary " onClick={handleClearClick} on>Clear Text</button>
    
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>You can read your text in {0.008 * text.split(" ").length} minutes </p>
      <h3>Preview</h3>
      <p>{text}</p>

    </div>
  </>
  )
}
