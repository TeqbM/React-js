import { useReducer, useState } from "react";

let inisialState = [
  {
    id:Date.now(),
    name:"MukesH"
  }
];
const reducer =(state,action)=>{
  if(action.type === "add"){
    console.log(payload);
    return [...state]
  }
} 

export default function Contact() {

  const [state,dispatch] = useReducer(reducer, inisialState);
  const [name,setName] =useState("")
  
  const addItem  = ()=>{
    // const useitm = {
    //   id:Date.now(),
    //   name:name
    // }
    // console.log(useitm);
    // dispatch({type: "add", payload:useI})
    console.log("===>>", name);
  }
  
  return (
    <section className="py-10">
      <div className="container">

          <input type="text" placeholder="add item" value={name} onChange={(e)=>setName(e.target.value)} />
          <button className="btn" onClick={addItem}>Add item</button>
      </div>
    </section>
  );
}
