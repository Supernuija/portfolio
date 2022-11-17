import React , { useState } from 'react'

type ClickCountProps = {
  initialValue: number,
  callback: () => void,
}

const ClickCount: React.FC<ClickCountProps> = ({ initialValue, callback }) => {
  const [count, setCount] = useState(initialValue) 


  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
        callback()
      }}>
        You clicked {count} times
      </button>

    </div>
  )
}

export default ClickCount
