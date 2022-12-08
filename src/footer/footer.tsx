import React , { useState } from 'react'
import styles from './footer.module.scss'

type FooterProps = {
    initialValue: number,
    callback: () => void,
}

const ClickCount: React.FC<FooterProps> = ({ initialValue, callback }) => {
    const [count, setCount] = useState(initialValue) 
  
    return (
      <div className={styles.container} >
        <button className={styles.button} onClick={() => {
          setCount(count + 1)
          callback()
        }}>
          You clicked {count} times
        </button>
  
      </div>
    )
  }
  
  export default ClickCount
