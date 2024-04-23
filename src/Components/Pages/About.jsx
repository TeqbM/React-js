import React, { useContext } from 'react'
import {AppUCon} from '../../AppContext'

export default function About() {
 const count = AppUCon()
 const {cou,setCou} = count
 
 console.log(count.cou);
  return (
    <section className='py-10'>
      <div className="container">
        <button className='btn' onClick={()=> setCou( cou-1)}>Decrement</button>
        <span className='mx-2 border p-2 w-12 text-center inline-block rounded-md'>{cou}</span>
        <button className='btn' onClick={()=> setCou( cou+1)}>Icrement</button>
      </div>
    </section>
  )
}
