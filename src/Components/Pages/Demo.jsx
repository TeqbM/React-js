import { useState } from "react"

const Demo =()=> {
    const [text,setText] = useState("")

    const txtUppercase = () => {
      setText(text.toUpperCase())
    }
    const txtLowecase = () => {
      setText(text.toLowerCase())
    }

    const  txtCapitalized =()=>{
      let capitalAt  = text.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } )
      setText(capitalAt)
    }
    
    const copyText = () =>{
      navigator.clipboard.writeText(text);
    }

    const removeExtraSpace = ()=>{
        let eSpace = text.split(' ')
        let removeSpace = eSpace.filter(s=>s).join(' ');
        setText(removeSpace);
    }

  return(
    <>  

        <textarea name="" id="" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text" rows={5}></textarea>
        <div className="flex gap-2">
          <button className="btn" onClick={txtLowecase}>lowerCase</button>
          <button className="btn" onClick={txtUppercase}>UpperCase</button>
          <button className="btn" onClick={txtCapitalized}>Capitalized Case</button>
          <button className="btn" onClick={copyText}>Copy text</button>
          <button className="btn" onClick={removeExtraSpace}>remove Space</button>

        </div>

    </>
  )
}

export default Demo