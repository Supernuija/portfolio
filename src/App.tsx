import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent'
import MyPdfFiles from './assets/HUMIDOR.pdf'; //react-app-env.d.ts must be created declare for pdf-type. 

const App: React.FC = () => {
  return (
    <div>
      <a href={MyPdfFiles}>PDF</a>
      <MyFirstComponent />
      <SomeExampleComponent />
    </div>
  )
}

export default App
