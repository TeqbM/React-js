import React, { useState } from 'react'

export default function Practice() {
  const [count, setCount] = useState(1)
  console.log(count);
  
  const inCrement = () => {
    setCount(count+1)
  }
  return (
    <>
      {count}
      <button className='btn' onClick={inCrement}>Button</button>

    </>
  )
}
