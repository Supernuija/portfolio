import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent'
import MyPdfFiles from './assets/HUMIDOR.pdf'; //react-app-env.d.ts must be created declare for pdf-type. 
import ClickCount from './components/clickCount';
import Navbar from './navbar/navbar';

const App: React.FC = () => {
  const LogKek = () => {
    console.log('kek') // this writes to the console
  }
  return (
    <div>
      <a href={MyPdfFiles}>PDF</a>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount initialValue={0} callback={LogKek} />
    </div>
  )
}

export default App
