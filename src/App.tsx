import React from 'react'
// import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent'
// import Footer from './components/clickCount';
import Footer from './footer/footer';
// import Navbar from './navbar/navbar';

const App: React.FC = () => {
  const LogKek = () => {
    console.log('kek') // this writes to the console
  }
  return (
    <div>
      {/* <MyFirstComponent /> */}
      <SomeExampleComponent />
      <Footer initialValue={0} callback={LogKek} />
    </div>
  )
}

export default App
