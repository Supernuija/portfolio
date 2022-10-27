import React, { useEffect, useState } from 'react'

type MyFirstComponentProps = {

}

const MyFirstComponent: React.FC<MyFirstComponentProps> = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1010)

    return clearTimeout(timer)

  }, [time])

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first <i><b>Great</b></i> component 😎</p>
      <hr></hr>
      <p>
        {/* {time} */}
      </p>
    </div>
  )
}

export default MyFirstComponent
