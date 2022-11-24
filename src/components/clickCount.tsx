import React , { useState } from 'react'
import styles from './clickCount.module.scss'

type ClickCountProps = {
  initialValue: number,
  callback: () => void,
}

const ClickCount: React.FC<ClickCountProps> = ({ initialValue, callback }) => {
  const [count, setCount] = useState(initialValue) 

  return (
    <div className={styles.container} >
      <button className={styles.button} onMouseEnter ={() => {
        setCount(count + 1)
        callback()
      }}>
        You clicked {count} times
      </button>

    </div>
  )
}

export default ClickCount
