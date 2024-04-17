import React, { useState } from "react";

export default function Contact() {
  const [text, setText] = useState("");

  const UpperCase =()=>{
      setText(text.toUpperCase())
  }
  const LowerCase =()=>{
    setText(text.toLowerCase())
  }
  const CapitaLize =()=>{
    let cap = text.trim().split(" ")
    
    console.log(cap);

  }
  return (
    <section className="py-10">
      <div className="container">
        <textarea name="" id="" cols="30" value={text} rows="5" onChange={(e)=> setText(e.target.value)}></textarea>
        <br />
        <button className="btn" onClick={UpperCase}>UpprCase</button>
        <button className="btn" onClick={CapitaLize}>CapitaLize</button>
        <button className="btn" onClick={LowerCase}>LowerCase</button>

      </div>
    </section>
  );
}
